import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

import { ProjectManagerOptionsQuery } from "./project-manager-options.query";
import { Neo4jClient } from "@/libs/neo4j";
import { Option } from "@shared";

@QueryHandler(ProjectManagerOptionsQuery)
export class ProjectManagerOptionsQueryHandler
    implements IQueryHandler<ProjectManagerOptionsQuery, Option[]>
{
    constructor(private readonly client: Neo4jClient) {}

    async execute(): Promise<Option[]> {
        const queryResult = await this.client.read(this.query);

        return queryResult.records.map((d) => d.get("projectManager"));
    }

    query = `
        MATCH (pm:ProjectManager)
        RETURN {
            value: pm.id,
            label: pm.name,
            color: pm.color
        } AS projectManager
            ORDER BY projectManager.label
   `;
}
