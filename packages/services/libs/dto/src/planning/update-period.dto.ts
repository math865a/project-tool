import { IsString, IsNotEmpty, IsDateString, IsIn } from "class-validator";

export class UpdatePeriodDto {
    @IsString()
    @IsNotEmpty()
    public readonly activityId: string;

    @IsString()
    @IsDateString()
    public readonly startDate: string;

    @IsString()
    @IsDateString()
    public readonly endDate: string;
}

export class PeriodDto {
    @IsString()
    @IsDateString()
    public readonly startDate: string;

    @IsString()
    @IsDateString()
    public readonly endDate: string;
}

export class PeriodUpdatedResult {
    @IsString()
    @IsNotEmpty()
    public readonly activityId: string;

    public readonly period: PeriodDto;

    @IsIn(["Plan", "Delivery", "Task", "Assignment", "Allocation"])
    public readonly kind:
        | "Plan"
        | "Delivery"
        | "Task"
        | "Assignment"
        | "Allocation";
}
