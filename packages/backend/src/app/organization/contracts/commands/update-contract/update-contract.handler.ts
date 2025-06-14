import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateContractCommand } from './update-contract.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { ValidateContractHandler, ValidateContractQuery } from '../../queries';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(UpdateContractCommand)
export class UpdateContractHandler implements ICommandHandler<UpdateContractCommand, FormResponse> {
    constructor(
        private readonly client: Neo4jClient,
        private readonly validate: ValidateContractHandler,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: UpdateContractCommand): Promise<FormResponse> {
        const isValid = await this.validate.execute(
            new ValidateContractQuery(
                command.dto.name,
                command.dto.abbrevation,
                command.dto.contractId,
            ),
        );
        if (!isValid) {
            return new FormErrorResponse({
                message: 'En kontrakt med samme navn eller forkortelse eksisterer allerede',
            });
        }

        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({ ...command.dto, uid: command.uid, type: 'contract.updated' });
            return new FormSuccessResponse({
                message: 'Kontrakten blev opdateret.',
            });
        }
        return new FormErrorResponse({ message: 'Noget gik galt.' });
    }

    query = `
        MATCH (c:Contract)
            WHERE c.id = $contractId
        SET c += {
            name: $name,
            abbrevation: $abbrevation
        }
        RETURN {} AS result
   `;
}
