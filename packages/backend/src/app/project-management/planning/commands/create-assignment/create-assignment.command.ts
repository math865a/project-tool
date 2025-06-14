import { CreateAssignmentDto } from '@shared';

export class CreateAssignmentCommand {
    constructor(
        public readonly dto: CreateAssignmentDto,
        public readonly uid: string,
    ) {}
}
