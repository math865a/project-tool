import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ValidateFinancialSourceNameQuery } from './validate-financialsource-name.query';
import { Neo4jClient } from '@/libs/neo4j';

@QueryHandler(ValidateFinancialSourceNameQuery)
export class ValidateFinancialSourceNameQueryHandler
    implements IQueryHandler<ValidateFinancialSourceNameQuery, boolean>
{
    constructor(private client: Neo4jClient) {}

    async execute({ name }: ValidateFinancialSourceNameQuery) {
        const queryResult = await this.client.read(this.query, {
            name: name,
        });
        return queryResult.records[0]?.get('exists');
    }

    query = `
        OPTIONAL MATCH (f:FinancialSource)
            WHERE f.name = $name
        RETURN CASE
            WHEN f IS NOT NULL
                THEN true
            ELSE false
        END AS exists
    `;
}
