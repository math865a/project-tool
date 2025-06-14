import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CreateAgentCommand } from './commands';
import { DeleteOrphanAgentsCommand } from './commands/delete-orphan-agents';
import { CommandBus } from '@nestjs/cqrs';
import { ResourceCreatedEvent, ResourceTypeCreatedEvent } from '@/libs/events';

@Injectable()
export class AgentsEventListener {
    constructor(private readonly commandBus: CommandBus) {}

    @OnEvent('resource.created')
    async handleResourceCreated(event: ResourceCreatedEvent) {
        console.log(
            'Resource created event triggered in agent-event-listener. Creating agents' +
                ' for resource and resource types',
        );

        if (!event.resourceId) {
            console.warn(
                'Resource created event does not contain a resourceId. Cannot create agents.',
            );
            return;
        }

        for (let i = 0; i < event.resourceTypes.length; i++) {
            await this.createAgent(event.resourceId, event.resourceTypes[i], event.uid);
        }
    }

    @OnEvent('resourcetype.created')
    async handleResourceTypeCreated(event: ResourceTypeCreatedEvent) {
        console.log(
            'Resource type created event triggered in agent-event-listener. Creating agents for resource type.',
        );

        if (!event.resourceTypeId) {
            console.warn(
                'Resource type created event does not contain a resourceTypeId. Cannot create agents.',
            );
            return;
        }

        for (let i = 0; i < event.resources.length; i++) {
            await this.createAgent(event.resources[i], event.resourceTypeId, event.uid);
        }
    }

    private async createAgent(resourceId: string, resourceTypeId: string, uid: string) {
        await this.commandBus.execute(
            new CreateAgentCommand({ resourceTypeId: resourceTypeId, resourceId: resourceId }, uid),
        );
    }

    @OnEvent('resource.deleted')
    async handleResourceDeleted() {
        console.log(
            'Resource deleted event triggered in agent-event-listener. Deleting orphan agents.',
        );
        await this.commandBus.execute(new DeleteOrphanAgentsCommand());
    }

    @OnEvent('resourcetype.deleted')
    async handleResourceTypeDeleted() {
        console.log(
            'Resource type deleted event triggered in agent-event-listener. Deleting orphan agents.',
        );
        await this.commandBus.execute(new DeleteOrphanAgentsCommand());
    }
}
