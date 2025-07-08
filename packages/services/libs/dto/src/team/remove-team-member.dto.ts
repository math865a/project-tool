import { IsString, IsNotEmpty } from "class-validator";

export class RemoveTeamMemberDto {
    @IsString()
    @IsNotEmpty()
    public readonly planId: string;

    @IsString()
    @IsNotEmpty()
    public readonly agentId: string;
}
