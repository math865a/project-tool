import { IQueryWeek } from './query-week.interface';
import { PickType } from '@nestjs/mapped-types';
import { ResourceCapacityInstructionsDto } from '@shared';

export class ResourceCapacityWeeksInstruction extends PickType(ResourceCapacityInstructionsDto, [
    'resourceId',
]) {
    public readonly periods: IQueryWeek[];
}
