import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateProjectManagerCommand } from './create-project-manager.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(CreateProjectManagerCommand)
export class CreateProjectManagerHandler
    implements ICommandHandler<CreateProjectManagerCommand, FormResponse>
{
    constructor(
        private client: Neo4jClient,
        private publisher: DomainEventPublisher,
    ) {}

    async execute({ dto, uid }: CreateProjectManagerCommand): Promise<FormResponse> {
        const query = this.getQuery(dto.id);
        const queryResult = await this.client.write(query, {
            ...dto,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...dto,
                uid,
                type: 'project-manager.created',
            });
            return new FormSuccessResponse({
                message: 'Projektlederen er oprettet',
            });
        }
        return new FormErrorResponse({
            message: 'Det skete en fejl ved oprettelsen af projektlederen',
        });
    }

    getQuery(id?: string) {
        const queryId: string = id ? '$id' : 'apoc.create.uuid()';
        return `
            MERGE (pm {
                id: ${queryId})
            SET pm += {
                name: $name,
                color: $color
            }
            WITH pm
            SET pm:ProjectManager
        `;
    }
}
