import { Injectable } from '@nestjs/common';
import { DomainEvent } from './domain-event';
import { DomainEventPublisher } from './domain-event-publisher';
import { instanceToPlain } from 'class-transformer';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class NestJSCqrsEventPublisher implements DomainEventPublisher {
    constructor(private readonly eventEmitter: EventEmitter2) {}

    publish(event: DomainEvent): void {
        console.log('Is publishing event:', event.type);
        const payload = this.serializeEvent(event);
        this.eventEmitter.emit(event.type, payload);
    }

    private serializeEvent(event: DomainEvent) {
        return {
            timestamp: new Date().toISOString(),
            ...instanceToPlain(event),
        };
    }
}
