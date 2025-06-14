import { ScheduleInstruction } from '../../types';

export class ScheduleQuery {
    constructor(public readonly instruction: ScheduleInstruction) {}
}
