import { Global, Module } from '@nestjs/common';
import { DomainEventPublisher } from './domain-event-publisher';
import { NestJSCqrsEventPublisher } from './nestjs-cqrs-event-publisher';
import { CqrsModule as NestJSCqrsModule } from '@nestjs/cqrs';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Global()
@Module({
    imports: [NestJSCqrsModule, EventEmitterModule.forRoot({ wildcard: true, delimiter: '*' })],
    providers: [
        {
            provide: DomainEventPublisher,
            useClass: NestJSCqrsEventPublisher,
        },
    ],
    exports: [DomainEventPublisher, NestJSCqrsModule, EventEmitterModule],
})
export class CQRSModule {}
