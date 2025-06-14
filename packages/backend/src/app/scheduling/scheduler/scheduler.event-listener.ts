import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { EventPattern } from '@nestjs/microservices';
import { AllocationCreatedEvent, AllocationUpdatedEvent, PeriodUpdatedEvent } from '@/libs/events';
import { SyncBookingsCommand } from './sync-bookings';

@Injectable()
export class SchedulerEventListener {
    constructor(private commandBus: CommandBus) {}

    @EventPattern('allocation.created')
    async onAllocationCreated(event: AllocationCreatedEvent) {
        await this.commandBus.execute(new SyncBookingsCommand(event.id, event.uid));
    }

    @EventPattern('activity.period.updated')
    async onPeriodUpdated(event: PeriodUpdatedEvent) {
        if (event.body.kind === 'Allocation') {
            await this.commandBus.execute(
                new SyncBookingsCommand(event.body.activityId, event.uid),
            );
        }
    }

    @EventPattern('allocation.updated')
    async onAllocationUpdated(event: AllocationUpdatedEvent) {
        await this.commandBus.execute(new SyncBookingsCommand(event.body.allocationId, event.uid));
    }
}
