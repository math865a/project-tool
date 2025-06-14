import { CreateResourceTypeDto } from '@shared';

export class CreateResourceTypeCommand {
    constructor(
        public readonly dto: CreateResourceTypeDto,
        public readonly uid: string,
    ) {}
}
