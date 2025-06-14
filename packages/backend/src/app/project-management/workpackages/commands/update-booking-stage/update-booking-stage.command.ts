import { UpdateBookingStageDto } from '@shared';

export class UpdateBookingStageCommand {
    constructor(
        public readonly dto: UpdateBookingStageDto,
        public readonly uid: string,
    ) {}
}
