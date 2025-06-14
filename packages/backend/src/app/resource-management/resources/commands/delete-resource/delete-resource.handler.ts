import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteResourceCommand } from './delete-resource.command';
import { FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(DeleteResourceCommand)
export class DeleteResourceHandler implements ICommandHandler<DeleteResourceCommand, FormResponse> {
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute({ resourceId, uid }: DeleteResourceCommand) {
        await this.client.write(this.deleteQuery, { resourceId });
        this.publisher.publish({
            type: 'resource.deleted',
            id: resourceId,
            uid: uid,
        });
        return new FormSuccessResponse({
            message: 'Ressourcen blev slettet',
        });
    }

    deleteQuery = `
        MATCH (r:Resource)
            WHERE r.id = $resourceId
        DETACH DELETE r
    `;
}
