import { SwapTeamMemberDto } from '@shared';

export class SwapTeamMemberCommand {
    constructor(
        public readonly dto: SwapTeamMemberDto,
        public readonly uid: string,
    ) {}
}
