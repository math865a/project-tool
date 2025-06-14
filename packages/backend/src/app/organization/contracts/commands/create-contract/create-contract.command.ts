import { CreateContractDto } from '@shared';

export class CreateContractCommand {
    constructor(
        public readonly dto: CreateContractDto,
        public readonly uid: string,
    ) {}
}
