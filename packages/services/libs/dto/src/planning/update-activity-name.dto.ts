import { IsString, IsNotEmpty } from "class-validator";

export class UpdateActivityNameDto {
    @IsString()
    @IsNotEmpty()
    public readonly activityId: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;
}
