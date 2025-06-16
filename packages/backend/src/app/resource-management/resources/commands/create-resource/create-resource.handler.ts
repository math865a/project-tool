import {CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import {CreateResourceCommand} from './create-resource.command';
import {FormSuccessResponse} from '@shared';

import {DomainEventPublisher} from '@/libs/cqrs';
import {Neo4jClient} from '@/libs/neo4j';
import {ResourceCreatedEvent} from '@/libs/events/resource-created.event';

@CommandHandler(CreateResourceCommand)
export class CreateResourceHandler
	implements ICommandHandler<CreateResourceCommand, FormSuccessResponse> {
	constructor(
		private readonly client: Neo4jClient,
		private readonly publisher: DomainEventPublisher,
	) {
	}

	async execute({dto, uid}: CreateResourceCommand): Promise<FormSuccessResponse> {
		const queryResult = await this.client.write(this.query, {
			properties: {
				name: dto.name,
				initials: dto.initials,
				costDefault: dto.costDefault,
				costOvertime: dto.costOvertime,
				color: dto.color,
			},
			calendar: dto.calendar,
			uid: uid,
		});
		const id = queryResult.records[0].get('id');
		const event: ResourceCreatedEvent = {
			...dto,
			resourceId: id,
			uid: uid,
			type: 'resource.created',
		};
		this.publisher.publish(event);
		return new FormSuccessResponse({id: id});
	}

	query = `
        MERGE (r {
            id: apoc.create.uuid()
        })
        SET r += $properties
        SET r:Resource
        WITH r

        CALL {
            WITH r
            MATCH (c:Calendar)
                WHERE c.id = $calendar
            MERGE (r)-[:USES]->(c)
        }
        
        RETURN r.id AS id
   `;
}
