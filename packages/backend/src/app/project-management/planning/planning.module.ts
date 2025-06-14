import { Module } from '@nestjs/common';
import { commandHandlers } from './commands';
import { queryHandlers } from './queries';
import { PlanningService } from './planning.service';

@Module({
    providers: [...commandHandlers, ...queryHandlers, PlanningService],
    exports: [PlanningService],
})
export class PlanningModule {}
