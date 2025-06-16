import { IsProjectManagerHandler } from "./is-project-manager";
import { ProjectManagerHandler } from "./project-manager";
import { ProjectManagerOptionsQueryHandler } from "./project-manager-options";
import { ProjectManagersHandler } from "./project-managers";
import { DefaultProjectManagerQueryHandler } from "./default-project-manager";

export const queryHandlers = [
    ProjectManagerOptionsQueryHandler,
    DefaultProjectManagerQueryHandler,
    ProjectManagersHandler,
    ProjectManagerHandler,
    IsProjectManagerHandler,
];
