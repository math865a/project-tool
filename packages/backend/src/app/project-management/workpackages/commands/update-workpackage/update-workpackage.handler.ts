import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateWorkpackageCommand } from './update-workpackage.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { ValidateSystematicNameQuery, ValidateSystematicNameQueryHandler } from '../../queries';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(UpdateWorkpackageCommand)
export class UpdateWorkpackageHandler
    implements ICommandHandler<UpdateWorkpackageCommand, FormResponse>
{
    constructor(
        private readonly client: Neo4jClient,
        private readonly validate: ValidateSystematicNameQueryHandler,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: UpdateWorkpackageCommand): Promise<FormResponse> {
        const systematicName = await this.validate.execute(
            new ValidateSystematicNameQuery(
                command.dto.contractId,
                command.dto.financialSourceId,
                command.dto.serialNo,
                command.dto.workpackageId,
            ),
        );
        if (typeof systematicName !== 'string') {
            return systematicName;
        }

        const result = await this.client.write(this.query, {
            ...command.dto,
            systematicName: systematicName,
            uid: command.uid,
        });
        if (result.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                systematicName: systematicName,
                uid: command.uid,
                type: 'workpackage.updated',
            });
            return new FormSuccessResponse({
                message: 'Arbejdspakkens blev opdateret.',
            });
        }
        return new FormErrorResponse({
            message: 'Arbejdspakkens blev ikke opdateret.',
        });
    }

    query = `
        MATCH (w:Workpackage)
            WHERE w.id = $workpackageId
        SET w += {
            name: $name,
            description: $description,
            serialNo: $serialNo,
            systematicName: $systematicName
        }
        WITH w

        CALL {
            WITH w
            MATCH (w)-[rel]-(:Contract)
            MATCH (c:Contract)
                WHERE c.id = $contractId

            CALL apoc.refactor.to(rel, c)
            YIELD output
            RETURN output
        }
        
        CALL {
            WITH w
            MATCH (f)-[rel]-(:FinancialSource)
            MATCH (f:FinancialSource)
                WHERE f.id = $financialSourceId
            CALL apoc.refactor.to(rel, f)
            YIELD output
            RETURN output as output1
        }

        RETURN {} AS result
   `;
}
