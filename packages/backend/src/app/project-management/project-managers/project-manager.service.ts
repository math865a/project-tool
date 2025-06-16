import { Body, Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import {
    ProjectManagerOptionsQuery,
    ProjectManagerQuery,
    ProjectManagersQuery,
} from "./queries";
import {
    AssignProjectManagerDto,
    CreateProjectManagerDto,
    Option,
    UpdateProjectManagerDto,
} from "@shared";
import { HttpUser } from "@/libs/util";
import {
    AssignProjectManagerCommand,
    CreateProjectManagerCommand,
    RemoveProjectManagerCommand,
    UpdateProjectManagerCommand,
} from "./commands";
import { DefaultProjectManagerQuery } from "./queries/default-project-manager";

@Injectable()
export class ProjectManagerService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    async getProjectManagers() {
        return await this.queryBus.execute(new ProjectManagersQuery());
    }

    async getDefaultProjectManager(): Promise<Option> {
        return await this.queryBus.execute(new DefaultProjectManagerQuery());
    }

    async getProjectManager(projectManagerId: string) {
        return await this.queryBus.execute(
            new ProjectManagerQuery(projectManagerId),
        );

        /*return await Promise.all([
			this.client.request(
				projectManagerPatterns.getProjectManagerProfile,
				id
			),
			this.client.request(
				workpackagePatterns.getProjectManagerWorkpackages,
				id
			),
		]).then((res) => ({
			node: res[0],
			workpackages: res[1],
		}));*/
    }

    async createProjectManager(
        @Body() dto: CreateProjectManagerDto,
        @HttpUser() uid: string,
    ) {
        return await this.commandBus.execute(
            new CreateProjectManagerCommand(dto, uid),
        );
    }

    async updateProjectManager(dto: UpdateProjectManagerDto, uid: string) {
        return await this.commandBus.execute(
            new UpdateProjectManagerCommand(dto, uid),
        );
    }

    async deleteProjectManager(projectManagerId: string, uid: string) {
        return await this.commandBus.execute(
            new RemoveProjectManagerCommand(projectManagerId, uid),
        );
    }

    async assignProjectManager(dto: AssignProjectManagerDto, uid: string) {
        return await this.commandBus.execute(
            new AssignProjectManagerCommand(dto, uid),
        );
    }

    async getProjectManagerOptions() {
        return await this.queryBus.execute(new ProjectManagerOptionsQuery());
    }
}
