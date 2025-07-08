import { Module } from "@nestjs/common";
import { EventLoggerModule } from "./event-logger/event-logger.module";
import { DBInitModule } from "./db-initializer/dbinit.module";

@Module({
    imports: [EventLoggerModule, DBInitModule],
})
export class MonitoringModule {}
