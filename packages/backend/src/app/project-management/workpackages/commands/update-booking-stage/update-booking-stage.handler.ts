import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateBookingStageCommand } from './update-booking-stage.command';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';
import { FormSuccessResponse } from '@shared';

@CommandHandler(UpdateBookingStageCommand)
export class UpdateBookingStageHandler implements ICommandHandler<UpdateBookingStageCommand, any> {
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: UpdateBookingStageCommand): Promise<any> {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        const prevStage: any = queryResult.records[0].get('prevStage');
        this.publisher.publish({
            prevStage: prevStage,
            newStage: command.dto.bookingStage,
            workPackageId: command.dto.workpackageId,
            uid: command.uid,
            type: 'booking-stage.updated',
        });
        return new FormSuccessResponse({
            message: 'Bookingstadiet blev opdateret',
        });
    }

    query = `
        MATCH (w:Workpackage)-[rel:AT]->(b:BookingStage)
                WHERE w.id = $workpackageId
        MATCH (newStage:BookingStage)
            WHERE newStage.name = $bookingStage

        CALL {
            WITH rel, newStage
            CALL apoc.refactor.to(rel, newStage)
            YIELD output
    
            SET output += {
                updatedAt: timestamp(),
                uid: $uid
            }
            RETURN output
        }
        RETURN b.id as prevStage
   `;
}
