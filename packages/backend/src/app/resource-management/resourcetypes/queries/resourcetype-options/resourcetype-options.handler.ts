import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ResourceTypeOptionsQuery } from './resourcetype-options.query';
import { Neo4jClient } from '@/libs/neo4j';
import { Option } from '@shared';

@QueryHandler(ResourceTypeOptionsQuery)
export class ResourceTypeOptionsHandler implements IQueryHandler<ResourceTypeOptionsQuery> {
    constructor(private client: Neo4jClient) {}

    async execute(query: ResourceTypeOptionsQuery): Promise<any> {
        const queryResult = await this.client.read(this.query, {});
        const result: (Option & { typeNo: number })[] = queryResult.records.map((d) =>
            d.get('resourcetype'),
        );
        return result.map((option) => ({
            value: option.value,
            label: option.label,
            color: option.color,
        }));
    }

    query = `
        MATCH (rt:ResourceType)--(c:Contract)
        RETURN {
            value: rt.id,
            label: apoc.text.join([rt.name, c.name], " - "),
            color: rt.color,
            typeNo: rt.typeNo
        } AS resourcetype
            ORDER BY resourcetype.typeNo
`;
}


/*            id: rt.id,
            name: rt.name,
            typeNo: rt.typeNo,
            contract: {
                id: c.id,
                name: c.name
            }*/