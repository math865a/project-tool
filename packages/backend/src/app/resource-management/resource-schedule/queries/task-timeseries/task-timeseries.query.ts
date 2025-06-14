import { ScheduleInstruction } from '../../types';

export class TaskTimeseriesQuery {
    constructor(public readonly instruction: ScheduleInstruction) {}
}
