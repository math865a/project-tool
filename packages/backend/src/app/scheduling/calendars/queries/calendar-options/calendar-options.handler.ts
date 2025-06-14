import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { CalendarOptionsQuery } from './calendar-options.query';
import { Neo4jClient } from '@/libs/neo4j';
import { Option } from '@shared';

@QueryHandler(CalendarOptionsQuery)
export class CalendarOptionsQueryHandler implements IQueryHandler<CalendarOptionsQuery, Option[]> {
    constructor(private client: Neo4jClient) {}

    async execute(query: CalendarOptionsQuery): Promise<Option[]> {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get('option'));
    }

    query = `
        MATCH (c:Calendar)
        WITH c ORDER BY c.name
        
        RETURN {
            value: c.id,
            label: c.name,
            isDefault: c.isDefault
        } AS option
  
    `;
}
