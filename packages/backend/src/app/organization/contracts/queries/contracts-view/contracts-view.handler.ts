import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ContractsViewQuery } from './contracts-view.query';
import { Neo4jClient } from '@/libs/neo4j';

@QueryHandler(ContractsViewQuery)
export class ContractViewQueryHandler implements IQueryHandler<ContractsViewQuery, any[]> {
    constructor(private readonly client: Neo4jClient) {}

    async execute(): Promise<any[]> {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get('row'));
    }

    query = `
        MATCH (c:Contract)
        RETURN {node: c{.*}} as row
   `;
}
