import { Module } from '@nestjs/common';
import { commandHandlers } from './commands';
import { queryHandlers } from './queries';
import { ProjectManagersController } from './project-managers.controller';
import { ProjectManagerService } from './project-manager.service';

@Module({
    providers: [...commandHandlers, ...queryHandlers, ProjectManagerService],
    controllers: [ProjectManagersController],
    exports: [ProjectManagerService],
})
export class ProjectManagersModule {}
