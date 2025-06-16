import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { DefaultProjectManagerQuery } from "./default-project-manager.query";
import { Option } from "@shared";
import { Neo4jClient } from "@/libs/neo4j";

@QueryHandler(DefaultProjectManagerQuery)
export class DefaultProjectManagerQueryHandler
    implements IQueryHandler<DefaultProjectManagerQuery, Option>
{
    constructor(private readonly client: Neo4jClient) {}

    async execute(): Promise<Option> {
        const result = await this.client.read(this.query);
        return result.records[0].get("projectManager");
    }

    query = `
		MATCH (pm:ProjectManager)
			WHERE pm.isDefault = true
		RETURN {
			value: pm.id,
			label: pm.name,
			color: pm.color
		} AS projectManager
	`;
}
