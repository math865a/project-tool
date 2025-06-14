import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddTeamMemberDto, RemoveTeamMemberDto, SwapTeamMemberDto } from '@shared';
import { AddTeamMemberCommand, RemoveTeamMemberCommand, SwapTeamMemberCommand } from './commands';
import { TeamOptionsQuery, WorkpackageTeamQuery } from './queries';

@Injectable()
export class TeamService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    async addTeamMember(dto: AddTeamMemberDto, uid: string) {
        return await this.commandBus.execute(new AddTeamMemberCommand(dto, uid));
    }

    async removeTeamMember(dto: RemoveTeamMemberDto, uid: string) {
        return await this.commandBus.execute(new RemoveTeamMemberCommand(dto, uid));
    }

    async swapTeamMember(dto: SwapTeamMemberDto, uid: string) {
        return await this.commandBus.execute(new SwapTeamMemberCommand(dto, uid));
    }

    async getWorkpackageTeam(workpackageId: string) {
        return await this.queryBus.execute(new WorkpackageTeamQuery(workpackageId));
    }

    async getTeamOptions(workpackageId: string) {
        return await this.queryBus.execute(new TeamOptionsQuery(workpackageId));
    }
}
