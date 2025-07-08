import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from "class-validator";
import { CreateAllocationDto } from "./create-allocation.dto";

export class CreateAssignmentDto {
    @IsString()
    @IsNotEmpty()
    public readonly id: string;

    @IsString()
    @IsNotEmpty()
    public readonly agentId: string;

    @IsString()
    @IsNotEmpty()
    public readonly taskId: string;

    @IsArray()
    @ArrayMinSize(1)
    public readonly allocations: CreateAllocationDto[];
}
