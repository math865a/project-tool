import { IQuery } from '@nestjs/cqrs';

export class ResourceTypeAgentsQuery implements IQuery {
    constructor(public readonly resourceTypeId: string) {}
}
