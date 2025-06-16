import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FinancialSourceOptionsQuery } from "./financialsource-options.query";
import { Neo4jClient } from "@/libs/neo4j";
import { Option } from "@shared";

@QueryHandler(FinancialSourceOptionsQuery)
export class FinancialSourceOptionsQueryHandler
    implements IQueryHandler<FinancialSourceOptionsQuery, Option[]>
{
    constructor(private client: Neo4jClient) {}

    async execute(): Promise<Option[]> {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get("option") as any);
    }

    query = `
        MATCH (f:FinancialSource)
        RETURN {
            value: f.id,
            label: f.name
        } AS option

    `;
}
