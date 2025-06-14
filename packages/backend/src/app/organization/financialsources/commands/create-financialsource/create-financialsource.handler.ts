import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateFinancialSourceCommand } from './create-financialsource.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import {
    ValidateFinancialSourceNameQuery,
    ValidateFinancialSourceNameQueryHandler,
} from '../../queries';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(CreateFinancialSourceCommand)
export class CreateFinancialSourceHandler
    implements ICommandHandler<CreateFinancialSourceCommand, FormResponse>
{
    constructor(
        private readonly client: Neo4jClient,
        private readonly ValidateName: ValidateFinancialSourceNameQueryHandler,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: CreateFinancialSourceCommand): Promise<FormResponse> {
        const exists = await this.ValidateName.execute(
            new ValidateFinancialSourceNameQuery(command.dto.name),
        );
        if (exists) {
            return new FormErrorResponse({
                validation: {
                    name: 'Der eksisterer allerede en finanskilde med dette navn.',
                },
            });
        }
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        this.publisher.publish({
            ...command.dto,
            uid: command.uid,
            type: 'financialsource.created',
        });
        return new FormSuccessResponse({
            id: queryResult.records[0].get('id'),
        });
    }

    query = `
        MATCH (u:User {uid: $uid})
        CREATE (f:FinancialSource {
            id: apoc.create.uuid(),
            name: $name
        })
        MERGE (f)-[r:CREATED_BY {timestamp: datetime()}]->(u)
        RETURN f.id AS id
   `;
}
