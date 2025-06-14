export interface DomainEventBase {
    type: string;
}

export interface DomainEvent extends DomainEventBase {
    [key: string]: any;
}
