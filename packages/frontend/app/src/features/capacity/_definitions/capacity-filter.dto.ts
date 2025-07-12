import { RowMode } from "~/src/features/capacity/_definitions/row-mode";
import { ViewMode } from "~/src/features/capacity/_definitions/view-mode";
import { Bound } from "~/src/features/capacity/_definitions/bound";

export declare class CapacityFilterDto {
    public readonly rowMode: RowMode;
    public readonly viewMode: ViewMode;
    public readonly bounds: Bound[];
    public readonly rows: string[];
}
