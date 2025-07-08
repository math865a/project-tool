import { IsString, IsNotEmpty, IsNumber, IsArray, Min, ArrayMinSize } from "class-validator";

export class CreateResourceTypeDto {
    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    @IsNotEmpty()
    public readonly abbrevation: string;

    @IsNumber()
    @Min(0)
    public readonly salesDefault: number;

    @IsNumber()
    @Min(0)
    public readonly salesOvertime: number;

    @IsNumber()
    @Min(1)
    public readonly typeNo: number;

    @IsString()
    @IsNotEmpty()
    public readonly contract: string;

    @IsArray()
    @IsString({ each: true })
    public readonly resources: string[];
}
