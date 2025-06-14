import { UpdateActivityColorDto } from '@shared';

export class UpdateActivityColorCommand {
    constructor(
        public readonly dto: UpdateActivityColorDto,
        public readonly uid: string,
    ) {}
}
