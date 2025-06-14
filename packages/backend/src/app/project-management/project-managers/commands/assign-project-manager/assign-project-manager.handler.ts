import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AssignProjectManagerCommand } from './assign-project-manager.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(AssignProjectManagerCommand)
export class AssignProjectManagerHandler
    implements ICommandHandler<AssignProjectManagerCommand, FormResponse>
{
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: AssignProjectManagerCommand): Promise<FormResponse> {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'project-manager.assigned',
            });
            return new FormSuccessResponse({ message: 'Projektlederen er tildelt arbejdspakken.' });
        }
        return new FormErrorResponse({
            message: 'Projektlederen kunne ikke tildeles arbejdspakken.',
        });
    }

    query = `
        MATCH (w:Workpackage)--(:Plan)<-[rel:MANAGES]-(:ProjectManager)
            WHERE w.id = $workpackageId
        MATCH (pm:ProjectManager)
            WHERE pm.id = $projectManagerId
        CALL apoc.refactor.from(rel, pm)
        YIELD output 
        RETURN {} AS result
   `;
}
