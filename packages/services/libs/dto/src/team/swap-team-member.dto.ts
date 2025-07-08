import { IsString, IsNotEmpty } from "class-validator";

export class SwapTeamMemberDto {
    @IsString()
    @IsNotEmpty()
    public readonly workpackageId: string;

    @IsString()
    @IsNotEmpty()
    public readonly fromAgent: string;

    @IsString()
    @IsNotEmpty()
    public readonly toAgent: string;
}
