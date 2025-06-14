import { UpdateProjectManagerDto } from '@shared';

export class UpdateProjectManagerCommand {
    constructor(
        public readonly dto: UpdateProjectManagerDto,
        public readonly uid: string,
    ) {}
}
