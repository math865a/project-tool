import { IsString, IsNotEmpty, IsDateString } from "class-validator";

export class CreateWorkpackageDto {
    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    @IsNotEmpty()
    public readonly description: string;

    @IsString()
    @IsNotEmpty()
    public readonly contract: string;

    @IsString()
    @IsNotEmpty()
    public readonly financialSource: string;

    @IsString()
    @IsNotEmpty()
    public readonly serialNo: string;

    @IsString()
    @IsNotEmpty()
    public readonly projectManager: string;

    @IsString()
    @IsDateString()
    public readonly startDate: string;

    @IsString()
    @IsDateString()
    public readonly endDate: string;

    @IsString()
    @IsNotEmpty()
    public readonly stage: string;
}
