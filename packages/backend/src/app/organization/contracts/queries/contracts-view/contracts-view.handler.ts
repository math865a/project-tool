import {IQueryHandler, QueryHandler} from '@nestjs/cqrs';
import {ContractsViewQuery} from './contracts-view.query';
import {Neo4jClient} from '@/libs/neo4j';
import {ContractViewRow} from "@shared";

@QueryHandler(ContractsViewQuery)
export class ContractViewQueryHandler implements IQueryHandler<ContractsViewQuery, ContractViewRow[]> {
	constructor(private readonly client: Neo4jClient) {
	}

	async execute(): Promise<ContractViewRow[]> {
		const queryResult = await this.client.read(this.query);
		return queryResult.records.map((d) => d.get('row'));
	}

	query = `
        MATCH (contracts:Contract)
        
        UNWIND contracts AS c
            CALL {
                WITH c
                OPTIONAL MATCH (c)<-[:IS_AGREED_UNDER]-(rt:ResourceType)
                WITH count(rt) AS resourceTypeCount
                RETURN resourceTypeCount
            }
            
            CALL {
                WITH c
                OPTIONAL MATCH (c)<-[:IS_UNDER]-(w:Workpackage)
                WITH count(w) AS workpackageCount
                RETURN workpackageCount
            }
        RETURN {
            id: c.id,
            node: c{.*},
            resourceTypeCount: resourceTypeCount,
            workpackageCount: workpackageCount
        } AS row
            ORDER BY row.node.name
   `;
}
