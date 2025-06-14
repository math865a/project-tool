import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteAgentCommand } from './delete-agent.command';
import { FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(DeleteAgentCommand)
export class DeleteAgentHandler implements ICommandHandler<DeleteAgentCommand, FormResponse> {
    constructor(
        private client: Neo4jClient,
        private publisher: DomainEventPublisher,
    ) {}

    async execute(command: DeleteAgentCommand): Promise<FormResponse> {
        const result = await this.client.write(this.query, { agentId: command.agentId });
        const deletedInfo = result.records[0].get('deletedInfo');
        this.publisher.publish({
            agentId: command.agentId,
            resourceId: deletedInfo.resourceId,
            resourceTypeId: deletedInfo.resourceTypeId,
            type: 'agent.deleted',
        });
        return new FormSuccessResponse({ message: 'Agent slettet' });
    }

    query = `
        MATCH (agent:Agent)
            WHERE agent.id = $agentId
    
        OPTIONAL MATCH (agent)-[:IS]->(resource:Resource)
        OPTIONAL MATCH (agent)-[:IS]->(resourcetype:ResourceType)
    
        // Store IDs before deletion
        WITH agent, resource.id AS resourceId, resourcetype.id AS resourcetypeId
    
        // Delete related Allocations
        CALL {
            WITH agent
            MATCH (agent)-[:IS_ASSIGNED_TO]->(a:Allocation)
            DETACH DELETE a
        }
    
        // Delete the Agent node
        DETACH DELETE agent
    
        // Return the captured IDs
        RETURN {
            resourceId: resourceId, 
            resourceTypeId: resourcetypeId
        } AS deletedInfo
    `;

    /*
    query = `
        MATCH (agent:Agent)
            WHERE agent.id = $agentId
        CALL {
            WITH agent
            MATCH (agent)-[:IS_ASSIGNED_TO]->(a:Allocation)
            DETACH DELETE a
        }
        DETACH DELETE agent
    `;
    */
}
