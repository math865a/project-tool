import { UpdateWorkpackageDto } from '@shared';

export class UpdateWorkpackageCommand {
    constructor(
        public readonly dto: UpdateWorkpackageDto,
        public readonly uid: string,
    ) {}
}
