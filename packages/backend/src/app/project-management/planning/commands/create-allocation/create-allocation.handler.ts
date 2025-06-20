import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAllocationCommand } from './create-allocation.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';
import { AllocationCreatedEvent } from '@/libs/events';

@CommandHandler(CreateAllocationCommand)
export class CreateAllocationHandler
    implements ICommandHandler<CreateAllocationCommand, FormResponse>
{
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: CreateAllocationCommand): Promise<FormResponse> {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('result');
        if (result) {
            const event: AllocationCreatedEvent = {
                ...command.dto,
                uid: command.uid,
                type: 'allocation.created',
            };
            this.publisher.publish(event);
            return new FormSuccessResponse({
                message: 'Allokeringen blev oprettet.',
            });
        }
        return new FormErrorResponse({
            message: 'Allokeringen blev ikke oprettet.',
        });
    }

    query = `
        MATCH (u:User {uid: $uid})
        MATCH (t:Task)
            WHERE t.id = $taskId
        MATCH (a:Agent)
            WHERE a.id = $agentId

        CREATE (al:Activity:Allocation {
            id: $id,
            startDate: date($startDate),
            endDate: date($endDate),
            defaultMinutes: toInteger($defaultMinutes),
            overtimeMinutes: toInteger($overtimeMinutes)
        })
        MERGE (t)-[ar:HAS]->(al)
        MERGE (a)-[:IS_ASSIGNED_TO]->(al)
        MERGE (al)-[ur:CREATED_BY {timestamp: timestamp()}]->(u)

        RETURN {
            allocation: al{
                .*,
                kind: apoc.coll.sort(apoc.node.labels(al))[1],
                identity: ID(al)
            }
        } AS result
   `;
}

/*        MATCH (a:Assignment)
            WHERE a.id = $assignmentId*/
