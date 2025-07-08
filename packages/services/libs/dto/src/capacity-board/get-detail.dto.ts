import { IsString, IsNotEmpty, IsDateString, IsEnum } from "class-validator";
import { ViewMode } from "@ns/definitions";

export class GetDetailDto {
    @IsString()
    @IsNotEmpty()
    public readonly rowId: string;

    @IsString()
    @IsDateString()
    public readonly startDate: string;

    @IsString()
    @IsDateString()
    public readonly endDate: string;

    @IsEnum(ViewMode)
    public readonly viewMode: ViewMode;
}
