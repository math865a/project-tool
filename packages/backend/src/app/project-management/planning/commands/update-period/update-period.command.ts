import { UpdatePeriodDto } from '@shared';

export class UpdatePeriodCommand {
    constructor(
        public readonly dto: UpdatePeriodDto,
        public readonly uid: string,
    ) {}
}
