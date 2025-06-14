import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateResourceTypeCommand } from './update-resourcetype.command';
import { FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(UpdateResourceTypeCommand)
export class UpdateResourceTypeHandler
    implements ICommandHandler<UpdateResourceTypeCommand, FormResponse>
{
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: UpdateResourceTypeCommand): Promise<FormResponse> {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('result');
        this.publisher.publish({ ...command, type: 'resourcetype.updated' });
        return new FormSuccessResponse({
            message: 'Detaljerne blev opdateret.',
        });
    }

    query = `
        MATCH (rt:ResourceType)
            WHERE rt.id = $resourceTypeId
        SET rt += {
            name: $name,
            abbrevation: $abbrevation,
            typeNo: $typeNo,
            salesDefault: $salesDefault,
            salesOvertime: $salesOvertime,
            color: $color
        }
        RETURN {} AS result
   `;
}
