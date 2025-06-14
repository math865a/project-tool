import { CreateAgentDto } from '@shared';

export class CreateAgentCommand {
    constructor(
        public readonly dto: CreateAgentDto,
        public readonly uid: string,
    ) {}
}
