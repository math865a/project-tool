import { IsString, IsNumber, IsNotEmpty, Min } from "class-validator";

export class UpdateResourceDto {
    @IsString()
    @IsNotEmpty()
    readonly resourceId: string;

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly initials: string;

    @IsNumber()
    @Min(0)
    readonly costDefault: number;

    @IsNumber()
    @Min(0)
    readonly costOvertime: number;
}
