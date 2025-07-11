import { IsNotEmpty, IsString } from "class-validator";

export class CreateProjectManagerDto {
    @IsString()
    @IsNotEmpty()
    public readonly id: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    public readonly color: string;
}
