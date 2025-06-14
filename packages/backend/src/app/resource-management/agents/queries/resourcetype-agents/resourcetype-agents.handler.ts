import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ResourceTypeAgentsQuery } from './resourcetype-agents.query';
import { Neo4jClient } from '@/libs/neo4j';

@QueryHandler(ResourceTypeAgentsQuery)
export class ResourceTypeAgentsQueryHandler implements IQueryHandler<ResourceTypeAgentsQuery, any> {
    constructor(private readonly client: Neo4jClient) {}

    async execute(query: ResourceTypeAgentsQuery): Promise<any> {
        const queryResult = await this.client.read(this.query, {
            resourceTypeId: query.resourceTypeId,
        });
        return queryResult.records.map((d) => d.get('data'));
    }

    query = `
        OPTIONAL MATCH (rt:ResourceType)--(a:Agent)--(r:Resource)
            WHERE rt.id = $resourceTypeId
        WITH {
            agentId: a.id,
            resource: r{.*}
        } AS data
            ORDER BY data.resource.name
        RETURN data
    `;
}
