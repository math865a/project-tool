import { IsNotEmpty, IsString } from "class-validator";

export class UpdateWorkpackageDto {
    @IsString()
    @IsNotEmpty()
    public readonly workpackageId: string;

    @IsString()
    public readonly name: string;

    @IsString()
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
