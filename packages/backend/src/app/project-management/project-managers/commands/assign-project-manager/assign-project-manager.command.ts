import { AssignProjectManagerDto } from '@shared';

export class AssignProjectManagerCommand {
    constructor(
        public readonly dto: AssignProjectManagerDto,
        public readonly uid: string,
    ) {}
}
