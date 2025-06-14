import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateResourceCommand } from './update-resource.command';
import { FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(UpdateResourceCommand)
export class UpdateResourceHandler implements ICommandHandler<UpdateResourceCommand, FormResponse> {
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: UpdateResourceCommand): Promise<FormResponse> {
        const queryResult = await this.client.write(this.query, {
            resourceId: command.dto.resourceId,
            name: command.dto.name,
            initials: command.dto.initials,
            costDefault: command.dto.costDefault,
            costOvertime: command.dto.costOvertime,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('result');
        this.publisher.publish({
            ...command.dto,
            uid: command.uid,
            type: 'resource.updated',
        });
        return new FormSuccessResponse({
            message: 'Detaljerne blev opdateret.',
        });
    }

    query = `
        MATCH (r:Resource)
            WHERE r.id = $resourceId
        SET r += {
            name: $name,
            initials: $initials,
            costDefault: $costDefault,
            costOvertime: $costOvertime
        }
        RETURN {} AS result
   `;
}
