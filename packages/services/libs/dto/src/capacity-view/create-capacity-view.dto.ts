import {
    IsArray,
    IsBoolean,
    IsEnum,
    IsIn,
    IsNotEmpty,
    IsString,
} from "class-validator";
import { ViewMode } from "@ns/definitions";

export class CreateCapacityViewDto {
    @IsString()
    @IsNotEmpty()
    public readonly viewId: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsArray()
    @IsString({ each: true })
    public readonly resources: string[];

    @IsArray()
    @IsString({ each: true })
    public readonly bookingStages: string[];

    @IsIn([1, -1])
    public readonly order: 1 | -1;

    @IsBoolean()
    public readonly showResourcesWithNoBookings: boolean;

    @IsEnum(ViewMode)
    public readonly viewMode: ViewMode;
}
