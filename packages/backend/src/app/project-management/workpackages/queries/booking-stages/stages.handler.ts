import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

import { Neo4jClient } from "@/libs/neo4j";
import { BookingStagesQuery } from "./booking-stages.query";
import { StageOption } from "@shared";

@QueryHandler(BookingStagesQuery)
export class BookingStagesQueryHandler
    implements IQueryHandler<BookingStagesQuery, StageOption[]>
{
    constructor(private readonly client: Neo4jClient) {}

    async execute(): Promise<StageOption[]> {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get("bookingStage"));
    }

    query = `
            MATCH (s:BookingStage)
            RETURN {
                value: s.name,
                label: s.name,
                color: s.color,
                sequence: s.sequence
            } AS bookingStage
                ORDER BY bookingStage.sequence
    `;
}
