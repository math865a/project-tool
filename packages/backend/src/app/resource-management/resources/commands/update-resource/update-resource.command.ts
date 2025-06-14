import { UpdateResourceDto } from '@shared';

export class UpdateResourceCommand {
    constructor(
        public readonly dto: UpdateResourceDto,
        public readonly uid: string,
    ) {}
}
