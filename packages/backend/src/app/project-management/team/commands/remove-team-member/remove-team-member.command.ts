import { RemoveTeamMemberDto } from '@shared';

export class RemoveTeamMemberCommand {
    constructor(
        public readonly dto: RemoveTeamMemberDto,
        public readonly uid: string,
    ) {}
}
