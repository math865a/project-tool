import { IsString, IsNotEmpty } from "class-validator";

export class CreateAgentDto {
    @IsString()
    @IsNotEmpty()
    public readonly resourceId: string;

    @IsString()
    @IsNotEmpty()
    public readonly resourcetypeId: string;
}
