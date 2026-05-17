import { EventBase } from "@ns/nats";

export class InvalidCredentialsEvent extends EventBase {
    constructor(public readonly email: string) {
        super();
    }
}
