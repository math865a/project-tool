import { Model, model, prop } from "mobx-keystone";
import {
    ActivityStore,
    AllotmentStore,
    Dimensions,
    Table,
    TeamStore,
    Timeline,
    Transport,
} from "@libs/features";

@model("gantt")
export class Gantt extends Model({
    planId: prop<string>(),
    workpackageId: prop<string>(),
    ActivityStore: prop<ActivityStore>(),
    TeamStore: prop<TeamStore>(),
    AllotmentStore: prop<AllotmentStore>(),
    Dimensions: prop<Dimensions>(),
    Transport: prop<Transport>(),
    Timeline: prop<Timeline>(),
    Table: prop<Table>(),
}) {}
