import { ResourceNode } from './resource.node';
import { ResourceTypeNode } from '../resourcetypes';

export class ResourceViewRow {
    id: string;
    node: ResourceNode;
    resourceTypes: ResourceTypeNode[];
    isUser: boolean;
}
