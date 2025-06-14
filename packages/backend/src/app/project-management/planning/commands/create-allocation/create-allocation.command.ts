import { CreateAllocationDto } from '@shared';

export class CreateAllocationCommand {
    constructor(
        public readonly dto: CreateAllocationDto,
        public readonly uid: string,
    ) {}
}
