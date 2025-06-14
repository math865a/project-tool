import { Module } from '@nestjs/common';
import { commandHandlers } from './commands';
import { queryHandlers } from './queries';
import { AgentsEventListener } from './agents.event-listener';
import { AgentsController } from './agents.controller';

@Module({
    providers: [...commandHandlers, ...queryHandlers, AgentsEventListener],
    controllers: [AgentsController],
})
export class AgentsModule {}
