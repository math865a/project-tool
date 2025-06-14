import { Module } from '@nestjs/common';
import { commandHandlers } from './commands';
import { queryHandlers } from './queries';
import { FinancialSourcesController } from './financialsources.controller';

@Module({
    providers: [...commandHandlers, ...queryHandlers],
    controllers: [FinancialSourcesController],
})
export class FinancialSourcesModule {}
