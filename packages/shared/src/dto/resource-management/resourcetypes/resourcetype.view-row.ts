import { ResourceTypeNode } from './resourcetype.node';
import { ContractNode } from '../../organization';

export class ResourceTypeViewRow {
    id: string;
    node: ResourceTypeNode;
    contract: ContractNode;
    resourceCount: number;
}
