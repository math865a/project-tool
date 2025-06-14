import { DomainEvent } from '@/libs/cqrs';
import { CreateResourceDto } from '@shared';

type ICreateResourceDto = InstanceType<typeof CreateResourceDto>;

export interface ResourceCreatedEvent extends DomainEvent, ICreateResourceDto {
    resourceId: string;
    uid: string;
}
