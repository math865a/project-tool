import { DateObjectUnits } from "luxon";

export class PlanJson {
    kind: "Plan" = "Plan";
    id: string;
    startDate: DateObjectUnits;
    endDate: DateObjectUnits;
    childIds: string[];
    name: string = "Plan";
    description?: string;

    constructor(props: {
        id: string;
        startDate: DateObjectUnits;
        endDate: DateObjectUnits;
        childIds?: string[];
    }) {
        Object.assign(this, props);
        this.childIds = props.childIds ? props.childIds : [];
    }
}
