import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteOrphanAgentsCommand } from './delete-orphan-agents.command';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(DeleteOrphanAgentsCommand)
export class DeleteOrphanAgentsHandler implements ICommandHandler<DeleteOrphanAgentsCommand> {
    constructor(
        private client: Neo4jClient,
        private publisher: DomainEventPublisher,
    ) {}

    async execute(): Promise<void> {
        await this.client.write(this.query);
        /*if (queryResult.summary.updateStatistics.containsUpdates()){
            this.publisher.publish(new OrphanAgentsDeletedEvent())
        }*/
    }

    query = `
        MATCH (a:Agent)
            WHERE NOT (a)-[:IS]->(:Resource) OR NOT (a)-[:IS]->(:ResourceType)

        DETACH DELETE a
    `;
}
