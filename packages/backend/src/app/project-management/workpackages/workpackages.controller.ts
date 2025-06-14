import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { WorkpackageProfileQuery, WorkpackageViewQuery } from './queries';
import { CreateWorkpackageDto, UpdateWorkpackageDto } from '@shared';
import { HttpUser } from '@/libs/util';
import {
    CreateWorkpackageCommand,
    DeleteWorkpackageCommand,
    UpdateWorkpackageCommand,
} from './commands';

@Controller('workpackages')
export class WorkpackagesController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    @Get()
    async getWorkpackagesView() {
        return await this.queryBus.execute(new WorkpackageViewQuery());
    }

    /*
        @Get("allocation/:allocationId")
        async getAllocationView(@Param("allocationId") allocationId: string) {
            return await this.client.request(
                planningPatterns.getAllocation,
                allocationId
            );
        }
    
        @Get("create-form")
        async getCreateForm() {
            return await Promise.all([
                this.client.request(workpackagePatterns.getWorkpackageCreateForm),
                this.client.request(contractPatterns.getContractOptions),
                this.client.request(
                    financialsourcePatterns.getFinancialSourceOptions
                ),
                this.client.request(
                    projectManagerPatterns.getProjectManagerOptions
                ),
                this.client.request(workpackagePatterns.getWorkpackageStages),
            ]).then((res) => ({
                record: res[0],
                options: {
                    contractOptions: res[1],
                    financialSourceOptions: res[2],
                    projectManagerOptions: res[3],
                    stageOptions: res[4],
                },
            }));
        }*/

    @Get(':workpackageId')
    async getWorkpackageProfile(@Param('workpackageId') workpackageId: string) {
        return await this.queryBus.execute(new WorkpackageProfileQuery(workpackageId));
        /*return await Promise.all([
            this.client.request(
                workpackagePatterns.getWorkpackageProfile,
                workpackageId
            ),
            this.client.request(planningPatterns.getPlan, workpackageId),
        ]).then((res: [Object, Object]) => ({
            ...res[0],
            planning: res[1],
        }));*/
    }

    @Post()
    async createWorkpackage(@Body() dto: CreateWorkpackageDto, @HttpUser() uid: string) {
        return await this.commandBus.execute(new CreateWorkpackageCommand(dto, uid));
    }

    @Post(':workpackageId')
    async updateWorkpackage(
        @Param('workpackageId') workpackageId: string,
        @Body() dto: Omit<UpdateWorkpackageDto, 'workpackageId'>,
        @HttpUser() uid: string,
    ) {
        return await this.commandBus.execute(
            new UpdateWorkpackageCommand({ ...dto, workpackageId }, uid),
        );
    }

    @Delete(':workpackageId')
    async deleteWorkpackage(
        @Param('workpackageId') workpackageId: string,
        @HttpUser() uid: string,
    ) {
        return await this.commandBus.execute(new DeleteWorkpackageCommand(workpackageId, uid));
    }
}
