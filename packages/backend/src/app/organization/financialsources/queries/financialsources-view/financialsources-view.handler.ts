import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FinancialSourcesViewQuery } from './financialsources-view.query';
import { Neo4jClient } from '@/libs/neo4j';

@QueryHandler(FinancialSourcesViewQuery)
export class FinancialSourcesViewQueryHandler
    implements IQueryHandler<FinancialSourcesViewQuery, any[]>
{
    constructor(private readonly client: Neo4jClient) {}

    async execute(): Promise<any[]> {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get('row'));
    }

    query = `
        MATCH (f:FinancialSource)
        RETURN {node: f{.*}} as row
   `;
}
