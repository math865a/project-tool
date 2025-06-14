import { Module } from '@nestjs/common';
import { CalendarsModule } from './calendars/calendars.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@Module({
    imports: [CalendarsModule, SchedulerModule],
})
export class SchedulingModule {}
