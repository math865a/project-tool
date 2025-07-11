import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateWorkpackageDto {
    @IsString()
    public readonly name: string;

    @IsString()
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
