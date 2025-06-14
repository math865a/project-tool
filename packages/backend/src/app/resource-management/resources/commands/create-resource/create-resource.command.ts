import { CreateResourceDto } from '@shared';


export class CreateResourceCommand {
    constructor(
        public readonly dto: CreateResourceDto,
        public readonly uid: string,
    ) {
    }
}

