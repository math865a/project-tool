import { IsString, IsNotEmpty } from "class-validator";

export class DeleteAssignmentDto {
    @IsString()
    @IsNotEmpty()
    public readonly agentId: string;

    @IsString()
    @IsNotEmpty()
    public readonly taskId: string;
}
