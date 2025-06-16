import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateResourceTypeCommand } from './create-resourcetype.command';
import {
    CreateResourceTypeDto,
    FormErrorResponse,
    FormResponse,
    FormSuccessResponse,
} from '@shared';
import { Neo4jClient } from '@/libs/neo4j';
import { DomainEventPublisher } from '@/libs/cqrs';
import { ResourceTypeCreatedEvent } from '@/libs/events';

@CommandHandler(CreateResourceTypeCommand)
export class CreateResourceTypeHandler
    implements ICommandHandler<CreateResourceTypeCommand, FormResponse>
{
    constructor(
        private readonly client: Neo4jClient,
        private readonly publisher: DomainEventPublisher,
    ) {}

    async execute(command: CreateResourceTypeCommand): Promise<FormResponse> {
        const validation = await this.checkDuplicates(command.dto);

        if (typeof validation !== 'boolean') {
            return validation;
        }
        const result = await this.create(command.dto, command.uid);

        const event: ResourceTypeCreatedEvent = {
            ...command.dto,
            uid: command.uid,
            type: 'resourcetype.created',
            resourceTypeId: result.resourceType.id,
        };

        this.publisher.publish(event);

        return new FormSuccessResponse({
            id: result.resourceType.id,
        });
    }

    async checkDuplicates(dto: CreateResourceTypeDto) {
        const duplicates = await this.client.read(this.duplicatesQuery, {
            contract: dto.contract,
            typeNo: dto.typeNo,
            abbrevation: dto.abbrevation,
            name: dto.name,
        });
        const result: { abbrevation: boolean; name: boolean; typeNo: boolean } =
            duplicates.records[0].get('duplicates');
        const errors: { [index: string]: string } = {};
        if (result.abbrevation) {
            errors.abbrevation =
                'En ressourcetype med denne forkortelse eksisterer allerede på den valgte kontrakt.';
        }
        if (result.name) {
            errors.name =
                'En ressourcetype med dette navn eksisterer allerede på den valgte kontrakt.';
        }
        if (result.typeNo) {
            errors.typeNo =
                'En ressourcetype med dette typenummer eksisterer allerede på den valgte kontrakt.';
        }
        if (Object.keys(errors).length > 0) {
            return new FormErrorResponse({ validation: errors });
        }
        return true;
    }

    async create(dto: CreateResourceTypeDto, uid: string) {
        console.log("resources", dto.resources)
        console.log("contract", dto.contract)
        console.log("dto", dto)
        const queryResult = await this.client.write(this.query, {
            ...dto,
            uid: uid,
        });
        return queryResult.records[0].get('result');
    }

    duplicatesQuery = `
        MATCH (c:Contract)
            WHERE c.id = $contract
        WITH 
            exists(
                (c)--(:ResourceType {typeNo: $typeNo})    
            ) AS typeNoExists,
            exists(
                (c)--(:ResourceType {name: $name})
            ) AS nameExists,
            exists(
                (c)--(:ResourceType {abbrevation: $abbrevation})
            ) AS abbrevationExists
        RETURN {
            typeNo: typeNoExists,
            name: nameExists,
            abbrevation: abbrevationExists
        } AS duplicates
    
    `;

    query = `
        MATCH (u:User {uid: $uid})
        MATCH (c:Contract) WHERE c.id = $contract
        CREATE (rt:ResourceType {
            id: apoc.create.uuid(),
            name: $name,
            abbrevation: $abbrevation,
            typeNo: toInteger($typeNo),
            salesDefault: $salesDefault,
            salesOvertime: $salesOvertime,
            color: $color
        })
        MERGE (rt)-[:CREATED_BY {timestamp: timestamp()}]->(u)
        MERGE (rt)-[:IS_AGREED_UNDER]->(c)
  
        
        RETURN {
            resourceType: rt{.*}
        } AS result
   `;
}

/*
      WITH rt
CALL {
            WITH rt
            UNWIND $resources AS resourceId
            MATCH (r:Resource) WHERE r.id = resourceId
            MERGE (a:Agent {
                id: apoc.create.uuid()
            })
            MERGE (a)-[:IS]->(r)
            MERGE (a)-[:IS]->(rt)
        }*/