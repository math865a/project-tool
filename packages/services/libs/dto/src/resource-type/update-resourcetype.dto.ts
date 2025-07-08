import { IsString, IsNotEmpty, IsNumber, Min } from "class-validator";

export class UpdateResourceTypeDto {
    @IsString()
    @IsNotEmpty()
    public readonly resourceTypeId: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    @IsNotEmpty()
    public readonly abbrevation: string;

    @IsNumber()
    @Min(1)
    public readonly typeNo: number;

    @IsNumber()
    @Min(0)
    public readonly salesDefault: number;

    @IsNumber()
    @Min(0)
    public readonly salesOvertime: number;
}
