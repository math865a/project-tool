import { Module } from '@nestjs/common';
import { commandHandlers } from './commands';
import { queryHandlers } from './queries';
import { CalendarsController } from './calendars.controller';

@Module({
    providers: [...commandHandlers, ...queryHandlers],
    controllers: [CalendarsController],
})
export class CalendarsModule {}
