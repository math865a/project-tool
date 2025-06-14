import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateActivityNameCommand } from './update-activity-name.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(UpdateActivityNameCommand)
export class UpdateActivityNameHandler
    implements ICommandHandler<UpdateActivityNameCommand, FormResponse>
{
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: UpdateActivityNameCommand): Promise<FormResponse> {
        const queryResult = await this.client.write(this.query, {
            activityId: command.dto.activityId,
            name: command.dto.name,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'activity.updated',
            });
            return new FormSuccessResponse({ message: 'Navnet er opdateret.' });
        }
        return new FormErrorResponse({
            message: 'Navnet kunne ikke opdateres.',
        });
    }

    query = `
        MATCH (a:Activity)
            WHERE a.id = $activityId
        SET a.name = $name
   `;
}
