import { IsString, IsNotEmpty, IsHexColor } from "class-validator";

export class CreateProjectManagerDto {
    @IsString()
    @IsNotEmpty()
    public readonly id: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    @IsHexColor()
    public readonly color: string;
}
