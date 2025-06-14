import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAgentCommand } from './create-agent.command';
import { CreateAgentDto, FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(CreateAgentCommand)
export class CreateAgentHandler implements ICommandHandler<CreateAgentCommand, FormResponse> {
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: CreateAgentCommand): Promise<FormResponse> {
        const exists = await this.checkIfExists(command.dto);
        if (exists) {
            return new FormErrorResponse({
                message: 'Der findes allerede en agent på denne ressource',
            });
        }
        const queryResult = await this.client.write(this.query, {
            resourceId: command.dto.resourceId,
            resourceTypeId: command.dto.resourceTypeId,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('agentId');
        console.log(result);
        if (!result) {
            return new FormErrorResponse({ message: 'Der skete en fejl' });
        }
        this.publisher.publish({
            agentId: result,
            ...command.dto,
            uid: command.uid,
            type: 'agent.created',
        });
        return new FormSuccessResponse({
            id: result,
            message: 'Agent oprettet',
        });
    }

    async checkIfExists(dto: CreateAgentDto) {
        const queryResult = await this.client.read(this.existsQuery, dto);
        return queryResult.records[0].get('agentExists');
    }

    existsQuery = `
        OPTIONAL MATCH (a:Agent)
            WHERE (a)-[:IS]->(:Resource {id: $resourceId})
            AND (a)-[:IS]->(:ResourceType {id: $resourceTypeId})
        RETURN CASE
            WHEN a IS NULL THEN false
            ELSE true
        END AS agentExists
    
    `;

    query = `
        MATCH (u:User {uid: $uid})
        MATCH (r:Resource)
            WHERE r.id = $resourceId
        MATCH (rt:ResourceType)
            WHERE rt.id = $resourceTypeId

        CREATE (a:Agent {id: apoc.create.uuid()})
        MERGE (a)-[:IS]->(r)
        MERGE (a)-[:IS]->(rt)
        MERGE (a)-[:CREATED_BY {timestamp: timestamp()}]->(u)
        RETURN a.id AS agentId
   `;
}
