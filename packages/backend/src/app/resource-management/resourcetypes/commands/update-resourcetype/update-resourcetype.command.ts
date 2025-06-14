import { UpdateResourceTypeDto } from '@shared';

export class UpdateResourceTypeCommand {
    constructor(
        public readonly dto: UpdateResourceTypeDto,
        public readonly uid: string,
    ) {}
}
