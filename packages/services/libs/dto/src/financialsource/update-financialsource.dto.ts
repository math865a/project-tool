import { IsString, IsNotEmpty } from "class-validator";

export class UpdateFinancialSourceDto {
    @IsString()
    @IsNotEmpty()
    public readonly financialSourceId: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;
}
