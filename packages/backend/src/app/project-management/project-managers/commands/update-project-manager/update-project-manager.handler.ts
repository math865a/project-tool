import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateProjectManagerCommand } from './update-project-manager.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(UpdateProjectManagerCommand)
export class UpdateProjectManagerHandler
    implements ICommandHandler<UpdateProjectManagerCommand, FormResponse>
{
    constructor(
        private client: Neo4jClient,
        private publisher: DomainEventPublisher,
    ) {}

    async execute(command: UpdateProjectManagerCommand): Promise<FormResponse> {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'project-manager.updated',
            });
            return new FormSuccessResponse({
                message: 'Projektlederen blev opdateret',
            });
        }
        return new FormErrorResponse({
            message: 'Der skete en fejl under opdateringen af projektlederen',
        });
    }

    query = `
        MATCH (n:ProjectManager)
            WHERE n.id = $id
        SET n += {
            name: $name,
            color: $color
        }
    `;
}
