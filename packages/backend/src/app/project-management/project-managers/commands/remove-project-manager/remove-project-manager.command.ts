export class RemoveProjectManagerCommand {
    constructor(
        public readonly projectManagerId: string,
        public readonly uid: string,
    ) {}
}
