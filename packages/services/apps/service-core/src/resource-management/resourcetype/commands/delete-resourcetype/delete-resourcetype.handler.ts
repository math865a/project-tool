import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { DeleteResourceTypeCommand } from "./delete-resourcetype.command";
import { Neo4jClient } from "@ns/neo4j";
import { DomainEvents } from "@ns/cqrs";
import { ResourcetypeDeletedEvent } from "@ns/events";
import { FormErrorResponse, FormSuccessResponse } from "@ns/definitions";

@CommandHandler(DeleteResourceTypeCommand)
export class DeleteResourceTypeHandler
    implements ICommandHandler<DeleteResourceTypeCommand>
{
    constructor(
        private readonly client: Neo4jClient,
        private publisher: DomainEvents
    ) {}

    async execute(command: DeleteResourceTypeCommand) {
        const { resourceTypeId, uid } = command;
        console.log(resourceTypeId);

        const queryResult = await this.client.write(this.query, {
            resourceTypeId,
        });

        const { summary } = queryResult;
        if (summary.updateStatistics.containsUpdates()) {
            this.publisher.publish(
                new ResourcetypeDeletedEvent({ id: resourceTypeId }, uid)
            );
            return new FormSuccessResponse({
                message: "Ressourcetypen er blevet slettet",
            });
        }
        return new FormErrorResponse({
            message: "Der skete en fejl under sletning af ressourcetype",
        });
    }

    query = `
        MATCH (rt:ResourceType)
            WHERE rt.id = $resourceTypeId
            
        CALL {
            WITH rt
            OPTIONAL MATCH (rt)<-[:IS]-(a:Agent)-[:IS_ASSIGNED_TO]->(al:Allocation)
            DETACH DELETE al
            DETACH DELETE a
        }
        
        DETACH DELETE rt
    
    `;
}
