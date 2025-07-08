import { IsString, IsNotEmpty, IsHexColor } from "class-validator";

export class UpdateActivityColorDto {
    @IsString()
    @IsNotEmpty()
    public readonly activityId: string;

    @IsString()
    @IsHexColor()
    public readonly color: string;
}
