import { Module } from '@nestjs/common';
import { ContractsController } from './contracts.controller';
import { commandHandlers } from './commands';
import { queryHandlers } from './queries';

@Module({
    providers: [...commandHandlers, ...queryHandlers],
    controllers: [ContractsController],
})
export class ContractsModule {}
