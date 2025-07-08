import { IsString, IsNotEmpty } from "class-validator";

export class UpdateStageDto {
    @IsString()
    @IsNotEmpty()
    readonly workpackageId: string;

    @IsString()
    @IsNotEmpty()
    readonly stage: string;
}
