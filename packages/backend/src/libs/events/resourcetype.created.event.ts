import { CreateResourceTypeDto } from '@shared';
import { DomainEvent } from '@/libs/cqrs';

type ICreateResourceTypeDto = InstanceType<typeof CreateResourceTypeDto>;

export interface ResourceTypeCreatedEvent extends ICreateResourceTypeDto, DomainEvent {
    uid: string;
    resourceTypeId: string;
}
