import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { PlanningService } from './planning/planning.service';
import { ProjectManagerService } from './project-managers/project-manager.service';
import { TeamService } from './team/team.service';
import { Server, Socket } from 'socket.io';
import {
    AddTeamMemberDto,
    AssignProjectManagerDto,
    CreateActivityDto,
    CreateAllocationDto,
    CreateAssignmentDto,
    DeleteAssignmentDto,
    RemoveTeamMemberDto,
    SwapTeamMemberDto,
    UpdateActivityColorDto,
    UpdateActivityNameDto,
    UpdateAllocationDto,
    UpdatePeriodDto,
} from '@shared';
import { UserId } from '@/libs/util';

@WebSocketGateway({
    namespace: 'project-management/gantt',
    cors: {
        origin: '*',
    },
})
export class GanttGateway {
    constructor(
        private readonly planningService: PlanningService,
        private readonly projectManagerService: ProjectManagerService,
        private readonly teamService: TeamService,
    ) {}

    @WebSocketServer()
    server: Server;

    //@UseGuards(WsGuard)
    @SubscribeMessage('join')
    join(@MessageBody() workpackageId: string, @ConnectedSocket() client: Socket) {
        console.log(client.handshake.headers);
        client.join(workpackageId);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('update:project-manager')
    async updateProjectManager(@MessageBody() dto: AssignProjectManagerDto, @UserId() uid: string) {
        return await this.projectManagerService.assignProjectManager(dto, uid);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('get:project-manager-options')
    async getProjectManagerOptions() {
        return await this.projectManagerService.getProjectManagerOptions();
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('get:team-options')
    async getTeamOptions(@MessageBody() workpackageId: string) {
        return await this.teamService.getTeamOptions(workpackageId);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('add:teammember')
    async addTeamMember(@MessageBody() dto: AddTeamMemberDto, @UserId() uid: string) {
        return await this.teamService.addTeamMember(dto, uid);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('remove:teammember')
    async removeTeamMember(@MessageBody() dto: RemoveTeamMemberDto, @UserId() uid: string) {
        return await this.teamService.removeTeamMember(dto, uid);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('swap:teammember')
    async swapTeamMember(
        @MessageBody()
        dto: SwapTeamMemberDto,
        @UserId() uid: string,
    ) {
        return await this.teamService.swapTeamMember(dto, uid);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('create:activity')
    async createActivity(@MessageBody() dto: CreateActivityDto, @UserId() uid: string) {
        return await this.planningService.createActivity(dto, uid);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('delete:activity')
    async deleteActivity(@MessageBody() activityId: string, @UserId() uid: string) {
        return await this.planningService.deleteActivity(activityId, uid);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('create:assignment')
    async createAssignment(@MessageBody() dto: CreateAssignmentDto, @UserId() uid: string) {
        return await this.planningService.createAssignment(dto, uid);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('delete:assignment')
    async deleteAssignment(@MessageBody() dto: DeleteAssignmentDto, @UserId() uid: string) {
        return await this.planningService.deleteAssignment(dto, uid);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('create:allocation')
    async createAllocation(@MessageBody() dto: CreateAllocationDto, @UserId() uid: string) {
        return await this.planningService.createAllocation(dto, uid);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('update:allocation')
    async updateAllocation(@MessageBody() dto: UpdateAllocationDto, @UserId() uid: string) {
        return await this.planningService.updateAllocation(dto, uid);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('update:period')
    async updatePeriod(@MessageBody() dto: UpdatePeriodDto, @UserId() uid: string) {
        return await this.planningService.updatePeriod(dto, uid);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('update:activity-name')
    async updateActivityName(@MessageBody() dto: UpdateActivityNameDto, @UserId() uid: string) {
        return await this.planningService.updateActivityName(dto, uid);
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('update:activity-color')
    async updateActivityColor(@MessageBody() dto: UpdateActivityColorDto, @UserId() uid: string) {
        return await this.planningService.updateActivityColor(dto, uid);
    }

    //@UseGuards(WsGuard)
    /*@SubscribeMessage('update:booking-stage')
    async updateBookingStage(@MessageBody() dto: UpdateBookingStageDto, @UserId() uid: string) {


        return await this.client.request(workpackagePatterns.updateBookingStage, {
            dto,
            uid,
        });
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('update:stage')
    async updateStage(@MessageBody() dto: UpdateStageDto, @UserId() uid: string) {
        return await this.client.request(workpackagePatterns.updateStage, {
            dto,
            uid,
        });
    }

    //@UseGuards(WsGuard)
    @SubscribeMessage('update:workpackage')
    async updateWorkpacakge(@MessageBody() dto: UpdateWorkpackageDto, @UserId() uid: string) {
        return await this.client.request(workpackagePatterns.updateWorkpackage, { dto, uid });
    }*/
}
