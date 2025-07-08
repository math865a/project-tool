import {
    IsArray,
    IsHexColor,
    IsNotEmpty,
    IsNumber,
    IsString,
    Min,
} from "class-validator";

export class CreateResourceDto {
    @IsString()
    @IsNotEmpty()
    public readonly id: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    @IsNotEmpty()
    public readonly initials: string;

    @IsNumber()
    @Min(0)
    public readonly costDefault: number;

    @IsNumber()
    @Min(0)
    public readonly costOvertime: number;

    @IsArray()
    @IsString({ each: true })
    public readonly resourceTypes: string[];

    @IsString()
    @IsNotEmpty()
    public readonly calendar: string;

    @IsString()
    @IsHexColor()
    public readonly color: string;
}
