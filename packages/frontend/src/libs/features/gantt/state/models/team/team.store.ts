import { getRoot, model, Model, modelAction, prop } from "mobx-keystone";
import {
    Gantt,
    Rate,
    Resource,
    ResourceType,
    TeamMember,
} from "@libs/features";
import { action, computed } from "mobx";
import { TeamMemberJson } from "@shared";
import _ from "lodash";

@model("team-store")
export class TeamStore extends Model({
    TeamMembers: prop<TeamMember[]>(() => []),
}) {
    @computed
    get Transport() {
        return getRoot<Gantt>(this).Transport;
    }

    @modelAction
    resolveMany(data: TeamMemberJson[]) {
        data.forEach(action((json) => this.resolve(json)));
    }

    @modelAction
    resolve(json: TeamMemberJson) {
        let Model = _.find(this.TeamMembers, (d) => d.id === json.id);
        if (Model) {
            Model.update(json);
        } else {
            Model = this.createModel(json);
            this.TeamMembers.push(Model);
        }
    }

    @modelAction
    createModel(json: TeamMemberJson) {
        return new TeamMember({
            id: json.id,
            resource: new Resource({
                ...json.resource,
                costRate: new Rate(_.cloneDeep(json.resource.costRate)),
            }),
            resourceType: new ResourceType({
                ...json.resourceType,
                salesRate: new Rate(_.cloneDeep(json.resourceType.salesRate)),
            }),
        });
    }

    @modelAction
    addTeamMember = (json: TeamMemberJson) => {
        this.resolve(json);
        this.Transport.addTeamMember(json.id);
    };

    @modelAction
    deleteTeamMember(TeamMember: TeamMember) {
        this.Transport.deleteTeamMember(TeamMember.id);
        TeamMember.Assignments.forEach((Assignment) => Assignment.remove());
        this.TeamMembers.splice(_.indexOf(this.TeamMembers, TeamMember), 1);
    }

    @modelAction
    swapTeamMember(fromAgent: string, toAgent: string) {
        const from = _.find(this.TeamMembers, (d) => d.id === fromAgent) as
            | TeamMember
            | undefined;
        const to = _.find(this.TeamMembers, (d) => d.id === toAgent) as
            | TeamMember
            | undefined;
        if (from && to) {
            from.Assignments.forEach((Assignments) => {
                const task = Assignments.task;
                if (task) {
                    const existingAssignment = to.Assignments.find(
                        (d) => d.task === task,
                    );
                    if (existingAssignment) {
                        Assignments.Allocations.forEach((allocation) => {
                            Assignments.removeAllocation(allocation);
                            existingAssignment.addAllocation(allocation);
                        });
                        Assignments.remove();
                    } else {
                        Assignments.setAgent(toAgent);
                    }
                }
            });
            //this.TeamMembers.splice(_.indexOf(this.TeamMembers, from), 1);
            this.Transport.swapTeamMember(fromAgent, toAgent);
            return true;
        }
        return false;
    }
}
