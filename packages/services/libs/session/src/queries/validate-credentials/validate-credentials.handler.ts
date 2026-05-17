import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { DomainEvents } from "@ns/cqrs";
import { InvalidCredentialsEvent, ValidCredentialsEvent } from "@ns/events";
import { Neo4jClient } from "@ns/neo4j";
import * as bcrypt from "bcrypt";
import { ValidateCredentialsQuery } from "./validate-credentials.query";

@QueryHandler(ValidateCredentialsQuery)
export class ValidateCredentialsHandler
    implements IQueryHandler<ValidateCredentialsQuery, { uid: string | null }>
{
    constructor(
        private readonly client: Neo4jClient,
        private publisher: DomainEvents
    ) {}

    async execute({
        email,
        password,
    }: ValidateCredentialsQuery): Promise<{ uid: string | null }> {
        const normalizedEmail = email.trim().toLowerCase();
        const queryResult = await this.client.read(this.query, { email: normalizedEmail });
        const record = queryResult.records[0];
        if (!record) {
            this.publisher.publish(new InvalidCredentialsEvent(email));
            return { uid: null };
        }
        const storedHash: string = record.get("password");
        const uid: string = record.get("uid");
        const isValid = await bcrypt.compare(password, storedHash);
        if (isValid) {
            this.publisher.publish(new ValidCredentialsEvent(uid));
            return { uid };
        }
        this.publisher.publish(new InvalidCredentialsEvent(email));
        return { uid: null };
    }

    query = `
        MATCH (a:Credentials)--(u:User)
            WHERE a.username = $email
        RETURN u.uid AS uid, a.password AS password
    `;
}
