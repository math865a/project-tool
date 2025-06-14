import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteActivityCommand } from './delete-activity.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(DeleteActivityCommand)
export class DeleteActivityHandler implements ICommandHandler<DeleteActivityCommand, FormResponse> {
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: DeleteActivityCommand): Promise<FormResponse> {
        const queryResult = await this.client.write(this.query, {
            activityId: command.activityId,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('result');
        if (result) {
            this.publisher.publish({
                activityId: command.activityId,
                uid: command.uid,
                type: 'activity.deleted',
                syncEvents: queryResult.records[0].get('syncEvents'),
            });
            return new FormSuccessResponse({ message: 'Aktiviteten blev slettet.' });
        }
        return new FormErrorResponse({ message: 'Der skete en fejl.' });
    }

    query = `
        MATCH (w:Workpackage)-[:HAS*1..5]->(a:Activity)
            WHERE a.id = $activityId

        CALL {
            WITH a, w
            OPTIONAL MATCH (a)-[:HAS]->(:Allocation)<-[:IS_ASSIGNED_TO]-(agent:Agent)
            WITH DISTINCT agent, w
            WITH collect({workpackageId: w.id, agentId: agent.id}) AS bookingsSyncedEvents
            RETURN bookingsSyncedEvents
        }
        WITH apoc.coll.sort(
            apoc.node.labels(a)
        )[1] AS kind, w.id AS workpackageId, a, bookingsSyncedEvents
        CALL {
            WITH a
            MATCH (a)-[:HAS*1..4]->(children:Activity)
            DETACH DELETE children
        }
        DETACH DELETE a

        RETURN bookingsSyncedEvents AS syncEvents, {
            kind: kind, 
            workpackageId: workpackageId
        } AS result
   `;
}
