import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FinancialSourcesViewQuery } from "./financialsources-view.query";
import { Neo4jClient } from "@/libs/neo4j";
import { FinancialSourceViewRow } from "@shared";

@QueryHandler(FinancialSourcesViewQuery)
export class FinancialSourcesViewQueryHandler
    implements
        IQueryHandler<FinancialSourcesViewQuery, FinancialSourceViewRow[]>
{
    constructor(private readonly client: Neo4jClient) {}

    async execute(): Promise<FinancialSourceViewRow[]> {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get("row"));
    }

    query = `
        MATCH (financialsources:FinancialSource)
        
        UNWIND financialsources AS f
            CALL {
                WITH f
                OPTIONAL MATCH (f)<-[:IS_FINANCED_BY]-(w:Workpackage)
                WITH count(w) AS workpackageCount
                RETURN workpackageCount
            }
        
        RETURN {
            id: f.id, 
            node: f{.*},
            workpackageCount: workpackageCount
        } as row
            ORDER BY row.node.name
   `;
}
