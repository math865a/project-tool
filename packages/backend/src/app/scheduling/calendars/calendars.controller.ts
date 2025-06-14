import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { CalendarOptionsQuery, DefaultCalendarQuery } from './queries';

@Controller('calendars')
export class CalendarsController {
    constructor(private queryBus: QueryBus) {}

    @Get('default')
    async getDefaultCalendar() {
        return this.queryBus.execute(new DefaultCalendarQuery());
    }

    @Get('options')
    async getCalendarOptions() {
        return this.queryBus.execute(new CalendarOptionsQuery());
    }
}
