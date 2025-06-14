import { ResourceCapacityInstructionsDto } from '@shared';

export class WorkpackageTotalsQuery {
    constructor(public readonly instruction: ResourceCapacityInstructionsDto) {}
}
