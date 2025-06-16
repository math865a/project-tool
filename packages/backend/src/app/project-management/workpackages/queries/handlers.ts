import { ProjectManagerWorkpackagesHandler } from "./project-manager-workpackages";
import { StagesQueryHandler } from "./stages";
import { ValidateSystematicNameQueryHandler } from "./validate-systematic-name";
import { WorkpackageCreateFormQueryHandler } from "./workpackage-create-form";
import { WorkpackageViewQueryHandler } from "./workpackages-view";
import { WorkpackageProfileQueryHandler } from "./workpackge-profile";
import { BookingStagesQueryHandler } from "./booking-stages";

export const queryHandlers = [
    ValidateSystematicNameQueryHandler,
    WorkpackageViewQueryHandler,
    WorkpackageProfileQueryHandler,
    StagesQueryHandler,
    WorkpackageCreateFormQueryHandler,
    ProjectManagerWorkpackagesHandler,
    BookingStagesQueryHandler,
];
