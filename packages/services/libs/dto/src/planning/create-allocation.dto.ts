import { IsString, IsNotEmpty, IsDateString, IsNumber, Min } from "class-validator";

export class CreateAllocationDto {
    @IsString()
    @IsNotEmpty()
    public readonly id: string;

    @IsString()
    @IsDateString()
    public readonly startDate: string;

    @IsString()
    @IsDateString()
    public readonly endDate: string;

    @IsNumber()
    @Min(0)
    public readonly defaultMinutes: number;

    @IsNumber()
    @Min(0)
    public readonly overtimeMinutes: number;

    @IsString()
    @IsNotEmpty()
    public readonly taskId: string;

    @IsString()
    @IsNotEmpty()
    public readonly agentId: string;
}
