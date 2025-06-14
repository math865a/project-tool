import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteFinancialSourceCommand } from './delete-financialsource.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(DeleteFinancialSourceCommand)
export class DeleteFinancialSourceHandler
    implements ICommandHandler<DeleteFinancialSourceCommand, FormResponse>
{
    constructor(
        private client: Neo4jClient,
        private publisher: DomainEventPublisher,
    ) {}

    async execute(command: DeleteFinancialSourceCommand): Promise<FormResponse> {
        const queryResult = await this.client.write(this.query, {
            financialSourceId: command.financialSourceId,
        });
        const financialSource = queryResult.records[0]?.get('financialSource');
        const workpackagesToDelete = queryResult.records[0]?.get('workpackages') ?? [];
        if (financialSource) {
            this.publisher.publish({ ...command, type: 'financialsource.deleted' });
            return new FormSuccessResponse({
                message: 'Finanskilden blev slettet',
            });
        }
        return new FormErrorResponse({
            message: 'Der skete en fejl under sletningen af finanskilden',
        });
    }

    query = `
        MATCH (f:FinancialSource)
            WHERE f.id = $financialSourceId

        CALL {
            WITH f
            RETURN f{.*} AS financialSource
        }

        CALL {
            WITH f
            OPTIONAL MATCH (f)--(w:Workpackage)
            WITH collect(w.id) AS workpackagesToDelete
            RETURN CASE
                WHEN workpackagesToDelete[0] IS NULL
                    THEN []
                ELSE workpackagesToDelete
            END AS workpackages
        }

        CALL {
            WITH f
            DETACH DELETE f
        }

        RETURN workpackages, financialSource
    
    `;
}
