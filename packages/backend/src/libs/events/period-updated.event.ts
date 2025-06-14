import { DomainEvent } from '@/libs/cqrs';

export interface PeriodUpdatedEvent extends DomainEvent {
    activityId: string;
    kind: 'Delivery' | 'Task' | 'Allocation';
    fromPeriod: {
        startDate: string;
        endDate: string;
    };
    toPeriod: {
        startDate: string;
        endDate: string;
    };
    uid: string;
}
