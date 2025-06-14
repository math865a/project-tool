import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ResourceTypesViewQuery } from './resourcetypes-view.query';
import { Neo4jClient } from '@/libs/neo4j';
import { ResourceTypeViewRow } from '@shared';

@QueryHandler(ResourceTypesViewQuery)
export class ResourceTypesViewQueryHandler
    implements IQueryHandler<ResourceTypesViewQuery, ResourceTypeViewRow[]>
{
    constructor(private readonly client: Neo4jClient) {}

    async execute(): Promise<ResourceTypeViewRow[]> {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get('row'));
    }

    query = `
        MATCH (resourceTypes:ResourceType)--(c:Contract)
        UNWIND resourceTypes AS rt
            CALL {
                WITH rt
                OPTIONAL MATCH (rt)--(:Agent)--(r:Resource)
                WITH count(r) AS resourceCount
                RETURN resourceCount
            }
        RETURN {
            id: rt.id,
            node: rt{.*},
            contract: c{.*},
            resourceCount: resourceCount
        } AS row
        ORDER BY row.node.typeNo
   `;
}
