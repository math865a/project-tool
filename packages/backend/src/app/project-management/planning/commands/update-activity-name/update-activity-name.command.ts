import { UpdateActivityNameDto } from '@shared';

export class UpdateActivityNameCommand {
    constructor(
        public readonly dto: UpdateActivityNameDto,
        public readonly uid: string,
    ) {}
}
