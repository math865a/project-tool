import { Module } from '@nestjs/common';
import { SyncBookingsHandler } from './sync-bookings';
import { SchedulerEventListener } from './scheduler.event-listener';

@Module({
    providers: [SyncBookingsHandler, SchedulerEventListener],
})
export class SchedulerModule {}
