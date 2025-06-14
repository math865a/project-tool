import { DomainEvent } from './domain-event';

export abstract class DomainEventPublisher {
    abstract publish(event: DomainEvent): Promise<void> | void;
}
