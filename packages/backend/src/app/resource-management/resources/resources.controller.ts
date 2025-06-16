import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {CreateResourceDto, Option, ResourceViewRow} from '@shared';
import { HttpUser } from '@/libs/util';
import { CreateResourceCommand, DeleteResourceCommand, UpdateResourceCommand } from './commands';
import { ResourceOptionsQuery, ResourceProfileQuery, ResourcesViewQuery } from './queries';

@Controller('resources')
export class ResourcesController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    @Post()
    async createResource(@Body() dto: CreateResourceDto, @HttpUser() uid: string) {
        return await this.commandBus.execute(new CreateResourceCommand(dto, uid));
    }

    @Get('options')
    async getResourceOptions(): Promise<Option[]> {
        return await this.queryBus.execute(new ResourceOptionsQuery());
    }

    @Post(':resourceId')
    async updateResource(
        @Param('resourceId') resourceId: string,
        @Body() dto: CreateResourceDto,
        @HttpUser() uid: string,
    ) {
        return await this.commandBus.execute(
            new UpdateResourceCommand({ ...dto, resourceId }, uid),
        );
    }

    @Delete(':resourceId')
    async deleteResource(@Param('resourceId') resourceId: string, @HttpUser() uid: string) {
        return await this.commandBus.execute(new DeleteResourceCommand(resourceId, uid));
    }

    @Get()
    async getResourcesView(): Promise<ResourceViewRow[]> {
        return await this.queryBus.execute(new ResourcesViewQuery());
    }

    @Get(':resourceId')
    async getResourceProfile(@Param('resourceId') resourceId: string) {
        return this.queryBus.execute(new ResourceProfileQuery(resourceId));

        /*
        return await Promise.all([
            this.client.request(patterns.getResourceProfile, resourceId),
            this.client.request(resourcePortfolioPatterns.getResourceAgents, resourceId),
        ]).then((res) => ({
            node: res[0],
            resourcetypes: res[1],
        }));*/
    }

    /*
    @Get("create-form-options")
    async getCreateForm() {
        return await Promise.all([
            this.client.request(resourceTypePatterns.getResourceTypeOptions),
            this.client.request(calendarPatterns.getCalendarOptions),
        ]).then((res) => ({
            resourceTypes: res[0],
            calendars: res[1],
        }));
    }
    */
}
