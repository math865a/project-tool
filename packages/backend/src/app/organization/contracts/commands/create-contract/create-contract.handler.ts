import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateContractCommand } from './create-contract.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { ValidateContractHandler, ValidateContractQuery } from '../../queries';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(CreateContractCommand)
export class CreateContractHandler implements ICommandHandler<CreateContractCommand, FormResponse> {
    constructor(
        private readonly client: Neo4jClient,
        private readonly validate: ValidateContractHandler,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: CreateContractCommand): Promise<FormResponse> {
        const isValid = await this.validate.execute(
            new ValidateContractQuery(command.dto.name, command.dto.abbrevation),
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
        const contractId = queryResult.records[0]?.get('id');
        if (contractId) {
            this.publisher.publish({ ...command.dto, uid: command.uid, type: 'contract.created' });
            return new FormSuccessResponse({ id: contractId });
        }
        return new FormErrorResponse({ message: 'Noget gik galt.' });
    }

    query = `
       MATCH (u:User {uid: $uid})
       CREATE (c:Contract {
            id: apoc.create.uuid(),
            name: $name,
            abbrevation: $abbrevation
        })
        MERGE (c)-[r:CREATED_BY {timestamp: datetime()}]->(u)
        RETURN c.id AS id
   `;
}
