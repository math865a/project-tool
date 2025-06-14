import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import {
    ValidateFinancialSourceNameQuery,
    ValidateFinancialSourceNameQueryHandler,
} from '../../queries';
import { UpdateFinancialSourceCommand } from './update-financialsource.command';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(UpdateFinancialSourceCommand)
export class UpdateFinancialSourceHandler
    implements ICommandHandler<UpdateFinancialSourceCommand, FormResponse>
{
    constructor(
        private readonly client: Neo4jClient,
        private readonly ValidateName: ValidateFinancialSourceNameQueryHandler,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: UpdateFinancialSourceCommand): Promise<FormResponse> {
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
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'financialsource.updated',
            });
            return new FormSuccessResponse({ message: 'Finanskilden blev opdateret' });
        }
        return new FormErrorResponse({ message: 'Der skete en fejl.' });
    }

    query = `
        MATCH (f:FinancialSource)
            WHERE f.id = $financialSourceId
        SET f += {
            name: $name
        }
        RETURN {} AS result
   `;
}
