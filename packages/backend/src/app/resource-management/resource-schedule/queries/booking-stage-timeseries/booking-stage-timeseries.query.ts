import { ResourceCapacityWeeksInstruction } from '../../types';

export class BookingStageTimeseriesQuery {
    constructor(public readonly instruction: ResourceCapacityWeeksInstruction) {}
}
