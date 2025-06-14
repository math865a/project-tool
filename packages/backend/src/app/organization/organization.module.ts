import { Module } from '@nestjs/common';
import { ContractsModule } from './contracts';
import { FinancialSourcesModule } from './financialsources';

@Module({
    imports: [ContractsModule, FinancialSourcesModule],
})
export class OrganizationModule {}
