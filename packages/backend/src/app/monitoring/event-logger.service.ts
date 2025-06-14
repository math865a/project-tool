import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MongoClient } from '@/libs/mongodb';
import { ObjectId } from 'mongodb';

@Injectable()
export class EventLoggerService implements OnModuleInit {
    constructor(
        private readonly eventEmitter: EventEmitter2,
        private readonly db: MongoClient,
    ) {}

    onModuleInit() {
        this.eventEmitter.onAny((eventName: string, value: any) => {
            console.log('Received event:', eventName);
            this.persistEvent(value);
        });
    }

    async persistEvent(value: any) {
        const doc = {
            _id: new ObjectId(),
            ...value,
        };
        await this.db.events.insertOne(doc);
    }
}
