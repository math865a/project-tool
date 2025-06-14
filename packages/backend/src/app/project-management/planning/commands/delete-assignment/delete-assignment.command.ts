import { DeleteAssignmentDto } from '@shared';

export class DeleteAssignmentCommand {
    constructor(
        public readonly dto: DeleteAssignmentDto,
        public readonly uid: string,
    ) {}
}
