import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ResourcesViewQuery } from './resources-view.query';
import { Neo4jClient } from '@/libs/neo4j';
import { ResourceViewRow } from '@shared';

@QueryHandler(ResourcesViewQuery)
export class ResourcesViewQueryHandler
    implements IQueryHandler<ResourcesViewQuery, ResourceViewRow[]>
{
    constructor(private readonly client: Neo4jClient) {}

    async execute(): Promise<any> {
        const queryResult = await this.client.read(this.query);
        return queryResult.records.map((d) => d.get('row')) as ResourceViewRow[];
    }

    query = `
        MATCH (rs:Resource)
        UNWIND rs AS r
        CALL {
            WITH r
            OPTIONAL MATCH (r)<-[:IS]-(:Agent)-[:IS]->(rts:ResourceType)
            RETURN collect(DISTINCT rts) AS rtList
        }
        WITH [rt IN rtList WHERE rt IS NOT NULL | {
            id: rt.id,
            name: rt.name,
            typeNo: apoc.text.join(["type", toString(toInteger(rt.typeNo))], " ")
        }] AS resourceTypes, r
        CALL {
            WITH r
            WITH exists((:User)-[:IS]->(r)) AS isUser
            RETURN isUser
        }
    
        RETURN {
            id: r.id,
            node: r{.*},
            resourceTypes: resourceTypes,
            isUser: isUser
        } AS row
        ORDER BY row.node.name
    `;
}

/*
query = `
        MATCH (rs:Resource)
        UNWIND rs AS r
        CALL {
            WITH r
            OPTIONAL MATCH (r)<-[:IS]-(:Agent)-[:IS]->(rts:ResourceType)
            RETURN DISTINCT rts AS rt
        }
        WITH collect({
            id: rt.id,
            name: rt.name,
            typeNo: apoc.text.join(["type", toString(rt.typeNo)], " ")
        }) AS resourceTypes, r
        CALL {
            WITH r
            WITH exists((:User)-[:IS]->(r)) AS isUser
            RETURN isUser
        }

        RETURN {
            node: r{.*},
            resourceTypes: resourceTypes,
            isUser: isUser
        } AS row
        ORDER BY row.node.name
   `;
 */