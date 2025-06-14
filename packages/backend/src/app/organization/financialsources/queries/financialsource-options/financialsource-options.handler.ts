import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FinancialSourceOptionsQuery } from './financialsource-options.query';
import { Neo4jClient } from '@/libs/neo4j';

@QueryHandler(FinancialSourceOptionsQuery)
export class FinancialSourceOptionsQueryHandler
    implements IQueryHandler<FinancialSourceOptionsQuery, any[]>
{
    constructor(private client: Neo4jClient) {}

    async execute(): Promise<any[]> {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get('option') as any);
    }

    query = `
        MATCH (f:FinancialSource)
        RETURN {
            id: f.id,
            name: f.name
        } AS option
    `;
}
