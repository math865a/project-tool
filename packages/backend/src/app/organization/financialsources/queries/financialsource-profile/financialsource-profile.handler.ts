import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FinancialSourceProfileQuery } from './financialsource-profile.query';
import { Neo4jClient } from '@/libs/neo4j';

@QueryHandler(FinancialSourceProfileQuery)
export class FinancialSourceProfileQueryHandler
    implements IQueryHandler<FinancialSourceProfileQuery, any>
{
    constructor(private readonly client: Neo4jClient) {}

    async execute(query: FinancialSourceProfileQuery): Promise<any> {
        const queryResult = await this.client.read(this.query, {
            financialSourceId: query.financialSourceId,
        });
        return queryResult.records[0].get('result');
    }

    query = `
        MATCH (f:FinancialSource)
            WHERE f.id = $financialSourceId
        RETURN {node: f{.*}} AS result
   `;
}
