import { Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { NATS } from "./_constants";
import { EventBase } from "./event-base";
import { instanceToPlain } from "class-transformer";

export class NatsPublisher {
    constructor(@Inject(NATS) private client: ClientProxy) {}

    publish(event: EventBase) {
        const name = event.constructor.name;
        this.client.emit(name, instanceToPlain(event));
    }
}
