import { Module } from '@nestjs/common';
import { commandHandlers } from './commands';
import { ResourcesController } from './resources.controller';
import { queryHandlers } from './queries';

@Module({
    providers: [...commandHandlers, ...queryHandlers],
    controllers: [ResourcesController],
})
export class ResourcesModule {}
