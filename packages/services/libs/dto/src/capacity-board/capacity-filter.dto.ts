import { IsEnum, IsArray, ArrayMinSize } from "class-validator";
import { Bound, RowMode, ViewMode } from "@ns/definitions";

export declare class CapacityFilterDto {
    @IsEnum(RowMode)
    public readonly rowMode: RowMode;

    @IsEnum(ViewMode)
    public readonly viewMode: ViewMode;

    @IsArray()
    @ArrayMinSize(1)
    public readonly bounds: Bound[];

    @IsArray()
    @ArrayMinSize(1)
    public readonly rows: string[];
}
