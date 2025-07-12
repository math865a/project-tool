import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAllocationDto {
    @IsString()
    @IsNotEmpty()
    public readonly id: string;

    @IsString()
    public readonly startDate: string;

    @IsString()
    public readonly endDate: string;

    @IsNumber()
    public readonly defaultMinutes: number;

    @IsNumber()
    public readonly overtimeMinutes: number;

    @IsString()
    @IsNotEmpty()
    public readonly taskId: string;

    @IsString()
    @IsNotEmpty()
    public readonly agentId: string;
}
