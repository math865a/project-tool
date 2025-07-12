import { IsNotEmpty, IsString } from "class-validator";
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

    public readonly allocations: CreateAllocationDto[];
}
