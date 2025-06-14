import { UpdateFinancialSourceDto } from '@shared';

export class UpdateFinancialSourceCommand {
    constructor(
        public readonly dto: UpdateFinancialSourceDto,
        public readonly uid: string,
    ) {}
}
