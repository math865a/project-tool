import { AddTeamMemberCommand } from './add-team-member.command';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(AddTeamMemberCommand)
export class AddTeamMemberHandler implements ICommandHandler<AddTeamMemberCommand, FormResponse> {
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: AddTeamMemberCommand): Promise<FormResponse> {
        const queryResult = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        const result = queryResult.records[0].get('result');
        if (result) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'team-member.added',
            });
            return new FormSuccessResponse({
                message: 'Teammedlemmet blev tilføjet.',
            });
        }
        return new FormErrorResponse({
            message: 'Der skete en fejl under tilføjelse af teammedlemmet.',
        });
    }

    query = `
        MATCH (p:Plan)
            WHERE p.id = $planId
        MATCH (a:Agent)
            WHERE a.id = $agentId
        MERGE result = (a)-[:IS_ASSIGNED_TO {timestamp: timestamp(), uid: $uid}]->(p)
        RETURN result
    `;
}
