import { UpdateStageDto } from '@shared';

export class UpdateStageCommand {
    constructor(
        public readonly dto: UpdateStageDto,
        public readonly uid: string,
    ) {}
}
