import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdatePeriodCommand } from './update-period.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';
import { PeriodUpdatedEvent } from '@/libs/events';

@CommandHandler(UpdatePeriodCommand)
export class UpdatePeriodHandler implements ICommandHandler<UpdatePeriodCommand, FormResponse> {
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: UpdatePeriodCommand): Promise<FormResponse> {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        const result = queryResult.records[0]?.get('result');
        if (queryResult.summary.updateStatistics.containsUpdates()) {
            const event: PeriodUpdatedEvent = {
                ...result,
                uid: command.uid,
                type: 'activity.period.updated',
            };
            this.publisher.publish(event);
            return new FormSuccessResponse({ message: 'Period er opdateret.' });
        }
        return new FormErrorResponse({
            message: 'Perioden kunne ikke opdateres.',
        });
    }

    query = `
        MATCH (a:Activity)
            WHERE a.id = $activityId
        CALL {
            WITH a
            RETURN {
                startDate: apoc.temporal.format(a.startDate, "YYYY-MM-dd"),
                endDate: apoc.temporal.format(a.endDate, "YYYY-MM-dd")
            } AS fromPeriod
        }
        SET a += {
            startDate: date($startDate),
            endDate: date($endDate)
        }
        WITH fromPeriod, a
        RETURN {
            activityId: a.id,
            fromPeriod: fromPeriod,
            toPeriod: {
                startDate: $startDate,
                endDate: $endDate
            },
            kind: apoc.coll.sort(
                apoc.node.labels(a)
            )[1]
        } AS result
   `;
}
