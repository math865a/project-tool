import { IsString, IsNotEmpty } from "class-validator";

export class UpdateWorkpackageDto {
    @IsString()
    @IsNotEmpty()
    public readonly workpackageId: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    @IsNotEmpty()
    public readonly description: string;

    @IsString()
    @IsNotEmpty()
    public readonly contractId: string;

    @IsString()
    @IsNotEmpty()
    public readonly financialSourceId: string;

    @IsString()
    @IsNotEmpty()
    public readonly serialNo: string;
}
