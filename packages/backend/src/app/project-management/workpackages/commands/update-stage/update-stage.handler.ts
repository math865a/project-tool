import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateStageCommand } from './update-stage.command';
import { FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(UpdateStageCommand)
export class UpdateStageHandler
    implements ICommandHandler<UpdateStageCommand, FormSuccessResponse>
{
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: UpdateStageCommand): Promise<FormSuccessResponse> {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });

        const result = queryResult.records[0].get('result');

        this.publisher.publish({
            prevStage: result.fromStage,
            newStage: result.newStage,
            workPackageId: result.workpackage.id,
            uid: command.uid,
            type: 'stage.updated',
        });
        return new FormSuccessResponse({ message: 'Stadiet blev ændret' });
    }

    query = `
        MATCH (w:Workpackage)-[sr:AT_STAGE]-(oldStage:Stage)
            WHERE w.id = $workpackageId
        MATCH (newStage: Stage)
            WHERE newStage.name = $stage
        CALL apoc.refactor.to(sr, newStage)
        YIELD output
        SET output += {
            modifiedBy: $uid,
            modifiedAt: timestamp()
        }
        RETURN {
            workpackage: w{.*},
            fromStage: oldStage.name,
            newStage: newStage.name
        } AS result
   `;
}
