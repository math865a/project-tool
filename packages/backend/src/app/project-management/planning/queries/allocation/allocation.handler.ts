import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { AllocationQuery } from './allocation.query';
import { Neo4jClient } from '@/libs/neo4j';

@QueryHandler(AllocationQuery)
export class AllocationQueryHandler implements IQueryHandler<AllocationQuery, any> {
    constructor(private client: Neo4jClient) {}

    async execute(query: AllocationQuery): Promise<any> {
        const queryResult = await this.client.read(this.query, {
            allocationId: query.allocationId,
        });
        return queryResult.records[0].get('result');
    }

    query = `
        MATCH (a:Allocation {id: $allocationId})
        MATCH (a)<-[:IS_ASSIGNED_TO]-(agent:Agent)
        RETURN {
            id: a.id,
            agentId: agent.id,
            startDate: apoc.temporal.format(a.startDate, "YYYY-MM-dd"),
            endDate: apoc.temporal.format(a.endDate, "YYYY-MM-dd"),
            defaultWork: round(a.defaultMinutes/60, 1),
            overtimeWork: round(a.overtimeMinutes/60,1)
        } AS result
`;
}
