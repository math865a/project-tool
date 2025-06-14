import { UpdateAllocationDto } from '@shared';
import { DomainEvent } from '@/libs/cqrs';

type IUpdateAllocationDto = InstanceType<typeof UpdateAllocationDto>;

export interface AllocationUpdatedEvent extends DomainEvent, IUpdateAllocationDto {}
