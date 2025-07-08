import { IsString, IsNotEmpty, IsDateString } from "class-validator";

export class ResourceCapacityInstructionsDto {
    @IsString()
    @IsNotEmpty()
    public readonly resourceId: string;

    @IsString()
    @IsDateString()
    public readonly startDate: string;

    @IsString()
    @IsDateString()
    public readonly endDate: string;
}
