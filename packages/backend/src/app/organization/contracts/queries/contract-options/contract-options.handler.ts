import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ContractOptionsQuery } from './contract-options.query';
import { Neo4jClient } from '@/libs/neo4j';
import {Option} from "@shared";

@QueryHandler(ContractOptionsQuery)
export class ContractOptionsHandler implements IQueryHandler<ContractOptionsQuery, Option[]> {
    constructor(private client: Neo4jClient) {}

    async execute(): Promise<Option[]> {
        const result = await this.client.read(this.query);
        return result.records?.map((record) => record.get("option")) ?? []
    }

    query = `
        MATCH (c:Contract)
        RETURN {
            value: c.id,
            label: c.name
        } AS option
    `;
}
