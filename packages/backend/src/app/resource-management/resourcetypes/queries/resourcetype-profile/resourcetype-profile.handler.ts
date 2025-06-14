import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ResourceTypeProfileQuery } from './resourcetype-profile.query';
import { Neo4jClient } from '@/libs/neo4j';

@QueryHandler(ResourceTypeProfileQuery)
export class ResourceTypeProfileQueryHandler
    implements IQueryHandler<ResourceTypeProfileQuery, any>
{
    constructor(private readonly client: Neo4jClient) {}

    async execute(query: ResourceTypeProfileQuery): Promise<any> {
        const queryResult = await this.client.read(this.query, {
            resourceTypeId: query.resourceTypeId,
        });
        const response: any = queryResult.records[0].get('result');
        return response;
    }

    query = `
        MATCH (rt:ResourceType)--(contract:Contract)
            WHERE rt.id = $resourceTypeId
        CALL {
            WITH rt
            OPTIONAL MATCH (rt)--(:Agent)--(r:Resource)
            WITH collect({
                id: r.id,
                name: r.name,
                initials: r.initials,
                color: r.color,
                costDefault: r.costDefault,
                costOvertime: r.costOvertime
            }) AS resourcesArr
            RETURN CASE
                WHEN resourcesArr[0].id IS NULL
                    THEN []
                ELSE resourcesArr
            END AS resources
        }
        RETURN {
            node: rt{.*},
            contract: contract{.*},
            resources: resources
        } AS result
    `;
}
