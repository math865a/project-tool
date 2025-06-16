import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ResourceOptionsQuery } from './resource-options.query';
import { Neo4jClient } from '@/libs/neo4j';
import {Option} from "@shared";

@QueryHandler(ResourceOptionsQuery)
export class ResourceOptionsQueryHandler implements IQueryHandler<ResourceOptionsQuery, Option[]> {
    constructor(private client: Neo4jClient) {}

    async execute(): Promise<Option[]> {
        const { records } = await this.client.read(this.query);
        return records.map((d) => d.get('resource'));
    }

    query = `
            MATCH (r:Resource)
            WITH {
                value: r.id,
                label: r.name,
                color: r.color
            } AS resource ORDER BY resource.name
            RETURN resource
        `
}
