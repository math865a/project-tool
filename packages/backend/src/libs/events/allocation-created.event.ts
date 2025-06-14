import { DomainEvent } from '@/libs/cqrs';
import { CreateAllocationDto } from '@shared';

type ICreateAllocationDto = InstanceType<typeof CreateAllocationDto>;

export interface AllocationCreatedEvent extends DomainEvent, ICreateAllocationDto {
    uid: string;
}
