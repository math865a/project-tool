import { Controller } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { EventPattern, MessagePattern } from "@nestjs/microservices";
import { presencePatterns as patterns } from "@ns/endpoints";
import { TogglePresenceCommand } from "./commands";
import { IsUserOnlineQuery, LoadPresenceQuery } from "./queries";
import { UserJoinedEvent, UserLeftEvent } from "@ns/events";
import { getSafeTime } from "@ns/util";

@Controller()
export class PresenceNatsController {
    constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

    @EventPattern(UserJoinedEvent.name)
    async registerPresence(event: UserJoinedEvent) {
        await this.commandBus.execute(
            new TogglePresenceCommand(
                true,
                getSafeTime(event.timestamp),
                event.uid
            )
        );
    }

    @EventPattern(UserLeftEvent.name)
    async registerAbsence(event: UserLeftEvent) {
        await this.commandBus.execute(
            new TogglePresenceCommand(
                false,
                getSafeTime(event.timestamp),
                event.uid
            )
        );
    }

    @MessagePattern(patterns.getPresence)
    async getOnlineUsers(uid: string) {
        return await this.queryBus.execute(new LoadPresenceQuery(uid, true));
    }

    @MessagePattern(patterns.getUserPresence)
    async getUser(uid: string) {
        return await this.queryBus.execute(new LoadPresenceQuery(uid));
    }

    @MessagePattern(patterns.getIsUserOnline)
    async isUserOnline(uid: string) {
        return await this.queryBus.execute(new IsUserOnlineQuery(uid));
    }
}
