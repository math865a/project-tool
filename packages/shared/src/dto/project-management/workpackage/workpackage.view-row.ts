import { WorkpackageNode } from "./workpackage.node";
import { ContractNode, FinancialSourceNode } from "../../organization";
import { PlanNode } from "../planning";
import { ProjectManagerNode } from "../project-manager";
import { StageNode } from "./stage.node";
import { BookingStageNode } from "./booking-stage.node";

export class WorkpackageViewRow {
    id: string;
    node: WorkpackageNode;
    contract: ContractNode;
    financialSource: FinancialSourceNode;
    plan: PlanNode;
    projectManager: ProjectManagerNode;
    stage: StageNode;
    bookingStage: BookingStageNode;
}
