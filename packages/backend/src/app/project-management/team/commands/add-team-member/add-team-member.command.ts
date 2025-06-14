import { AddTeamMemberDto } from '@shared';

export class AddTeamMemberCommand {
    constructor(
        public readonly dto: AddTeamMemberDto,
        public readonly uid: string,
    ) {}
}
