import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
    ResourceTypeOptionsQuery,
    ResourceTypeProfileQuery,
    ResourceTypesViewQuery,
} from './queries';
import { CreateResourceTypeDto, ResourceTypeViewRow, UpdateResourceTypeDto } from '@shared';
import { HttpUser } from '@/libs/util';
import { CreateResourceTypeCommand, UpdateResourceTypeCommand } from './commands';

@Controller('resourcetypes')
export class ResourceTypesController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    @Get()
    async getResourceTypesView(): Promise<ResourceTypeViewRow[]> {
        return await this.queryBus.execute(new ResourceTypesViewQuery());
    }

    @Get('options')
    async getResourceTypeOptions() {
        return await this.queryBus.execute(new ResourceTypeOptionsQuery());
    }

    @Post()
    async createResourceType(@Body() dto: CreateResourceTypeDto, @HttpUser() uid: string) {
        return await this.commandBus.execute(new CreateResourceTypeCommand(dto, uid));
    }

    @Get(':resourceTypeId')
    async getResourceTypeProfile(@Param('resourceTypeId') resourceTypeId: string) {
        return await this.queryBus.execute(new ResourceTypeProfileQuery(resourceTypeId));
    }

    @Delete(':resourceTypeId')
    async deleteResourceType(
        @Param('resourceTypeId') resourceTypeId: string,
        @HttpUser() uid: string,
    ) {
        throw new Error('Not implemented');
        //return await this.commandBus.execute(new DeleteResourceTypeCommand(resourceTypeId, uid));
    }

    @Post(':resourceTypeId')
    async updateResourceType(
        @Param('resourceTypeId') resourceTypeId: string,
        @Body() dto: Omit<UpdateResourceTypeDto, 'resourceTypeId'>,
        @HttpUser() uid: string,
    ) {
        return await this.commandBus.execute(
            new UpdateResourceTypeCommand(
                {
                    ...dto,
                    resourceTypeId,
                },
                uid,
            ),
        );
    }

    /*
    @Get('create-form')
    async getCreateForm() {



        return await Promise.all([
            this.client.request(contractPatterns.getContractOptions),
            this.client.request(resourcePatterns.getResourceOptions),
        ]).then((res) => ({
            options: {
                resourceOptions: res[1],
                contractOptions: res[0],
            },
            record: {
                name: '',
                abbrevation: '',
                salesDefault: 0,
                salesOvertime: 0,
                typeNo: '',
                contract: (res[0] as any[]).find((d) => d.name === 'Rådgiverkontrakt')?.id ?? '',
                resources: [],
            },
        }));
}*/
}
