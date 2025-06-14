import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RemoveTeamMemberCommand } from './remove-team-member.command';
import { FormErrorResponse, FormResponse, FormSuccessResponse } from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';

@CommandHandler(RemoveTeamMemberCommand)
export class RemoveTeamMemberHandler
    implements ICommandHandler<RemoveTeamMemberCommand, FormResponse>
{
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: RemoveTeamMemberCommand): Promise<FormResponse> {
        const result = await this.client.write(this.query, {
            ...command.dto,
            uid: command.uid,
        });
        if (result.summary.updateStatistics.containsUpdates()) {
            this.publisher.publish({
                ...command.dto,
                uid: command.uid,
                type: 'team-member.removed',
            });
            return new FormSuccessResponse({
                message: 'Teammedlemmet blev fjernet.',
            });
        }
        return new FormErrorResponse({
            message: 'Der skete en fejl under fjernelse af teammedlemmet.',
        });
    }

    query = `
        MATCH (pl:Plan)<-[rel:IS_ASSIGNED_TO]-(agent:Agent)
            WHERE pl.id = $planId
            AND agent.id = $agentId
            
        CALL {
            WITH rel
            DELETE rel
        }
        CALL {
            WITH agent, pl
            MATCH (t:Task)<-[rel:IS_ASSIGNED_TO]-(agent)
                WHERE (t)<-[:HAS*2]-(pl)
            DELETE rel
        }
        CALL {
            WITH agent, pl
            MATCH (a:Allocation)<-[:IS_ASSIGNED_TO]-(agent)
                WHERE (a)<-[:HAS*3]-(pl)
            DETACH DELETE a
        }
   `;
}
