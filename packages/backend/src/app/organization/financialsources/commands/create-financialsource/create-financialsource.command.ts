import { CreateFinancialSourceDto } from '@shared';

export class CreateFinancialSourceCommand {
    constructor(
        public readonly dto: CreateFinancialSourceDto,
        public readonly uid: string,
    ) {}
}
