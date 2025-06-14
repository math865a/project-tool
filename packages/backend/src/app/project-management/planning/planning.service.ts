import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
    CreateActivityDto,
    CreateAllocationDto,
    CreateAssignmentDto,
    DeleteAssignmentDto,
    UpdateActivityColorDto,
    UpdateActivityNameDto,
    UpdateAllocationDto,
    UpdatePeriodDto,
} from '@shared';

@Injectable()
export class PlanningService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    async createActivity(dto: CreateActivityDto, uid: string) {}

    async deleteActivity(activityId: string, uid: string) {}

    async createAssignment(dto: CreateAssignmentDto, uid: string) {}

    async deleteAssignment(dto: DeleteAssignmentDto, uid: string) {}

    async createAllocation(dto: CreateAllocationDto, uid: string) {}

    async updateAllocation(dto: UpdateAllocationDto, uid: string) {}

    async updatePeriod(dto: UpdatePeriodDto, uid: string) {}

    async updateActivityName(dto: UpdateActivityNameDto, uid: string) {}

    async updateActivityColor(dto: UpdateActivityColorDto, uid: string) {}
}
