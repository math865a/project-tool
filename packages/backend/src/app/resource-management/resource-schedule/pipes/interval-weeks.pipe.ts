import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

import { DateTime as dt, Interval as int } from 'luxon';
import { ResourceCapacityInstructionsDto } from '@shared';
import { IQueryWeek, ResourceCapacityWeeksInstruction } from '../types';

@Injectable()
export class IntervalWeeksPipe implements PipeTransform {
    transform(
        value: ResourceCapacityInstructionsDto,
        metadata: ArgumentMetadata,
    ): ResourceCapacityWeeksInstruction {
        return {
            resourceId: value.resourceId,
            periods: this.getWeeks(value.startDate, value.endDate),
        };
    }

    getWeeks(startDate?: string, endDate?: string): IQueryWeek[] {
        const dtStart = dt.fromISO(startDate);
        const dtEnd = dt.fromISO(endDate);
        return int
            .fromDateTimes(dtStart, dtEnd)
            .splitBy({ weeks: 1 })
            .map((d) => ({
                week: d.start.weekNumber,
                year: d.start.year,
            }));
    }
}
