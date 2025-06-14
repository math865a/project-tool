import { Module } from '@nestjs/common';
import { PlanningModule } from './planning/planning.module';
import { ProjectManagersModule } from './project-managers';
import { TeamModule } from './team/team.module';
import { WorkpackagesModule } from './workpackages';
import { GanttGateway } from './gantt.gateway';

@Module({
    imports: [PlanningModule, ProjectManagersModule, TeamModule, WorkpackagesModule],
    providers: [GanttGateway],
})
export class ProjectManagementModule {}
