import {
    FormErrorResponse,
    FormResponse,
    FormSuccessResponse,
} from "@ns/definitions";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { DomainEvents } from "@ns/cqrs";
import { PasswordUpdatedEvent } from "@ns/events";
import { Neo4jClient } from "@ns/neo4j";
import * as bcrypt from "bcrypt";
import { UpdatePasswordCommand } from "./update-password.command";

@CommandHandler(UpdatePasswordCommand)
export class UpdatePasswordHandler
    implements ICommandHandler<UpdatePasswordCommand, FormResponse>
{
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEvents
    ) {}

    async execute({ dto, uid }: UpdatePasswordCommand): Promise<FormResponse> {
        const { password, oldPassword } = dto;
        const isCurrentPassword = await this.checkCurrentPassword(
            uid,
            oldPassword
        );
        if (!isCurrentPassword) {
            return new FormErrorResponse({
                message: "Den angivne adgangskode er forkert",
            });
        }
        const res = await this.updatePassword(uid, password);
        if (res) {
            this.publisher.publish(new PasswordUpdatedEvent(uid));
            return new FormSuccessResponse({
                message: "Dit password blev opdateret",
            });
        }
        return new FormErrorResponse({ message: "Der skete en fejl" });
    }

    async checkCurrentPassword(
        uid: string,
        password: string
    ): Promise<boolean> {
        const res = await this.client.read(this.checkQuery, { uid });
        if (res.records.length === 0) return false;
        const storedHash: string = res.records[0].get("password");
        return bcrypt.compare(password, storedHash);
    }

    private readonly checkQuery = `
        MATCH (u:User)--(cred:Credentials)
            WHERE u.uid = $uid
        RETURN cred.password AS password
    `;

    async updatePassword(uid: string, password: string) {
        const hash = await bcrypt.hash(password, 10);
        const res = await this.client.write(this.query, {
            uid: uid,
            password: hash,
        });
        return res.records.length > 0;
    }

    query = `
        MATCH (u:User)--(cred:Credentials)
            WHERE u.uid = $uid
        SET cred += {
            password: $password,
            changedAt: timestamp()
        }
        RETURN u.uid AS uid
   `;
}
