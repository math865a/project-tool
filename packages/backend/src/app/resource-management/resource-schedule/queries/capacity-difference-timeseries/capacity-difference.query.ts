import { ResourceCapacityWeeksInstruction } from '../../types';

export class CapacityDifferenceTimeseriesQuery {
    constructor(public readonly instruction: ResourceCapacityWeeksInstruction) {}
}
