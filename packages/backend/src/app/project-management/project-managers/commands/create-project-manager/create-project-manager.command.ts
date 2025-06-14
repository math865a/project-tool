import { CreateProjectManagerDto } from '@shared';

export class CreateProjectManagerCommand {
    constructor(
        public readonly dto: CreateProjectManagerDto,
        public readonly uid: string,
    ) {}
}
