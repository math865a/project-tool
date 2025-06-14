import { CreateActivityDto } from '@shared';

export class CreateActivityCommand {
    constructor(
        public readonly dto: CreateActivityDto,
        public readonly uid: string,
    ) {}
}
