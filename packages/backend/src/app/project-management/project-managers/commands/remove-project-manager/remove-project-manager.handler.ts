import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveProjectManagerCommand } from './remove-project-manager.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(RemoveProjectManagerCommand)
export class RemoveProjectManagerHandler
    implements ICommandHandler<RemoveProjectManagerCommand, FormResponse>
{
    constructor(
        private client: Neo4jClient,
        private publisher: DomainEventPublisher,
    ) {}

    async execute(command: RemoveProjectManagerCommand): Promise<FormResponse> {
        const { projectManagerId, uid } = command;
        const shouldDelete = await this.examineLabels(projectManagerId);
        if (shouldDelete) {
            const deleted = await this.deleteProjectManager(projectManagerId);
            if (deleted) {
                this.publisher.publish({
                    ...command,
                    type: 'project-manager.deleted',
                });
                return new FormSuccessResponse({
                    message: 'Projektlederen er blevet slettet',
                });
            }
        } else {
            const removed = await this.removeProjectManagerLabel(projectManagerId);
            if (removed) {
                this.publisher.publish({
                    ...command,
                    type: 'project-manager.removed',
                });
                return new FormSuccessResponse({
                    message: 'Projektlederen er blevet fjernet',
                });
            }
        }
        return new FormErrorResponse({
            message: 'Der skete en fejl under sletning af projektlederen',
        });
    }

    async examineLabels(projectManagerId: string) {
        const queryResult = await this.client.read(this.labelsQuery, { projectManagerId });
        const labels = queryResult.records[0].get('pmLabels');
        console.log(labels);
        return labels.length === 1;
    }

    labelsQuery = `
        MATCH (pm:ProjectManager)
            WHERE pm.id = $projectManagerId
        WITH labels(pm) AS pmLabels
        RETURN pmLabels as pmLabels
    `;

    async deleteProjectManager(projectManagerId: string) {
        const queryResult = await this.client.write(this.deleteQuery, { projectManagerId });
        const { summary } = queryResult;
        return summary.updateStatistics.containsUpdates();
    }

    deleteQuery = `
        MATCH (pm:ProjectManager)
            WHERE pm.id = $projectManagerId
        DETACH DELETE pm
    `;

    async removeProjectManagerLabel(projectManagerId: string) {
        const queryResult = await this.client.write(this.removeLabelQuery, {
            projectManagerId,
        });
        const { summary } = queryResult;
        return summary.updateStatistics.containsUpdates();
    }

    removeLabelQuery = `
        MATCH (pm:ProjectManager)
            WHERE pm.id = $projectManagerId
        CALL {
            WITH pm
            OPTIONAL MATCH (pm)-[rel:MANAGES]->(p:Plan)
            DELETE rel
        }
        REMOVE pm:ProjectManager
    `;
}
