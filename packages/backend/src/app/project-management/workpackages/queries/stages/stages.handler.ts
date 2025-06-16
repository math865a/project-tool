import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

import { StagesQuery } from "./stages.query";
import { Neo4jClient } from "@/libs/neo4j";
import { StageOption } from "@shared";

@QueryHandler(StagesQuery)
export class StagesQueryHandler
    implements IQueryHandler<StagesQuery, StageOption[]>
{
    constructor(private readonly client: Neo4jClient) {}

    async execute(): Promise<StageOption[]> {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get("stage"));
    }

    query = `
            MATCH (s:Stage)
            RETURN {
                value: s.name,
                label: s.name,
                color: s.color,
                sequence: s.sequence
            } AS stage
                ORDER BY stage.sequence
    `;
}
