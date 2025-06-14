import { Module } from '@nestjs/common';
import { EventLoggerService } from './event-logger.service';
import { MongoModule } from '@/libs/mongodb';

@Module({
    imports: [MongoModule],
    providers: [EventLoggerService],
})
export class MonitoringModule {}
