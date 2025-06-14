import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateAllocationCommand } from './update-allocation.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';
import { AllocationUpdatedEvent } from '@/libs/events';

@CommandHandler(UpdateAllocationCommand)
export class UpdateAllocationHandler
    implements ICommandHandler<UpdateAllocationCommand, FormResponse>
{
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: UpdateAllocationCommand): Promise<FormResponse> {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            const event: AllocationUpdatedEvent = {
                ...command.dto,
                uid: command.uid,
                type: 'allocation.updated',
            };
            this.publisher.publish(event);
            return new FormSuccessResponse({
                message: 'Allokeringen er opdateret.',
            });
        }
        return new FormErrorResponse({
            message: 'Allokeringen kunne ikke opdateres.',
        });
    }

    query = `
        MATCH (u:User {uid: $uid})
        MATCH (al:Allocation)<-[rel:IS_ASSIGNED_TO]-(:Agent)
            WHERE al.id = $allocationId

        CALL {
            WITH rel
            MATCH (a:Agent)
                WHERE a.id = $agentId
            CALL apoc.refactor.from(rel, a)
            YIELD output
            RETURN output
        }

        SET al.startDate = date($startDate),
            al.endDate = date($endDate),
            al.defaultMinutes = toInteger($defaultMinutes),
            al.overtimeMinutes = toInteger($overtimeMinutes)

    `;
}
