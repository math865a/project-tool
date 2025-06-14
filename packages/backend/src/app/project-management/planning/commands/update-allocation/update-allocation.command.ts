import { UpdateAllocationDto } from '@shared';

export class UpdateAllocationCommand {
    constructor(
        public readonly dto: UpdateAllocationDto,
        public readonly uid: string,
    ) {}
}
