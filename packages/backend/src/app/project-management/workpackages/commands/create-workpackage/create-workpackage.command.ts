import { CreateWorkpackageDto } from '@shared';

export class CreateWorkpackageCommand {
    constructor(
        public readonly dto: CreateWorkpackageDto,
        public readonly uid: string,
    ) {}
}
