import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DefaultCalendarQuery } from './default-calendar.query';
import { Neo4jClient } from '@/libs/neo4j';
import { CalendarNode } from '@shared';

@QueryHandler(DefaultCalendarQuery)
export class DefaultCalendarQueryHandler
    implements IQueryHandler<DefaultCalendarQuery, CalendarNode>
{
    constructor(private client: Neo4jClient) {}

    async execute(query: DefaultCalendarQuery): Promise<CalendarNode> {
        const queryResult = await this.client.read(this.query);
        return queryResult.records[0].get('calendar');
    }

    query = `
        MATCH (c:Calendar)
            WHERE c.isDefault
        RETURN c{.*} AS calendar
    `;
}
