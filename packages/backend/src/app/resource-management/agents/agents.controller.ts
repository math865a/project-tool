import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
    DeleteAgentConsequencesQuery,
    ResourceAgentsQuery,
    ResourceTypeAgentsQuery,
} from './queries';
import { HttpUser } from '@/libs/util';
import { CreateAgentCommand, DeleteAgentCommand } from './commands';
import { CreateAgentDto, FormResponse } from '@shared';

@Controller('agents')
export class AgentsController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    @Get('delete-consequences/:agentId')
    async getDeleteConsequences(@Param('agentId') agentId: string) {
        return await this.queryBus.execute(new DeleteAgentConsequencesQuery(agentId));
    }

    @Delete(':agentId')
    async deleteAgent(@Param('agentId') agentId: string, @HttpUser() uid: string) {
        return await this.commandBus.execute(new DeleteAgentCommand(agentId, uid));
    }

    @Post()
    async createAgents(@Body() dto: CreateAgentDto[], @HttpUser() uid: string) {
        let results: FormResponse[] = [];
        for (let i = 0; i < dto.length; i++) {
            const response = await this.commandBus.execute(new CreateAgentCommand(dto[i], uid));
            if (response) {
                results.push(response);
            }
        }
        return results[0];
    }

    @Get('resource/:resourceId')
    async getResourceAgents(@Param('resourceId') resourceId: string) {
        return await this.queryBus.execute(new ResourceAgentsQuery(resourceId));
    }

    @Get('resourcetype/:resourceTypeId')
    async getResourceTypeAgents(@Param('resourceTypeId') resourceTypeId: string) {
        return await this.queryBus.execute(new ResourceTypeAgentsQuery(resourceTypeId));
    }
}
