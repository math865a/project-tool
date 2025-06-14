import { Module } from '@nestjs/common';
import { commandHandlers } from './commands';
import { queryHandlers } from './queries';
import { WorkpackagesController } from './workpackages.controller';

@Module({
    providers: [...commandHandlers, ...queryHandlers],
    controllers: [WorkpackagesController],
})
export class WorkpackagesModule {}
