import { ResourceCapacityInstructionsDto } from '@shared';

export class WorkpackageTasksQuery {
    constructor(
        public readonly instruction: ResourceCapacityInstructionsDto,
        public readonly workpackageId: string,
    ) {}
}
