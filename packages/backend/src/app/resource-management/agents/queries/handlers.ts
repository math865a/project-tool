import { ResourceAgentsQueryHandler } from './resource-agents';
import { ResourceTypeAgentsQueryHandler } from './resourcetype-agents';
import { DeleteAgentConsequencesQueryHandler } from './delete-agent-consequences';

export const queryHandlers = [
    ResourceAgentsQueryHandler,
    ResourceTypeAgentsQueryHandler,
    DeleteAgentConsequencesQueryHandler,
];
