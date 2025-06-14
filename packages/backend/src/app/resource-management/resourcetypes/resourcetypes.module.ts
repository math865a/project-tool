import { Module } from '@nestjs/common';
import { commandHandlers } from './commands';
import { queryHandlers } from './queries';
import { ResourceTypesController } from './resourcetypes.controller';

@Module({
    providers: [...commandHandlers, ...queryHandlers],
    controllers: [ResourceTypesController],
})
export class ResourceTypesModule {}
