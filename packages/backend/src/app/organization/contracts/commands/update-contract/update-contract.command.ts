import { UpdateContractDto } from '@shared';

export class UpdateContractCommand {
    constructor(
        public readonly dto: UpdateContractDto,
        public readonly uid: string,
    ) {}
}
