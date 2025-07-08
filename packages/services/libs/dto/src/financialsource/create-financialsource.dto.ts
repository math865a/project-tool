import { IsString, IsNotEmpty } from "class-validator";

export class CreateFinancialSourceDto {
    @IsString()
    @IsNotEmpty()
    public readonly name: string;
}

export class FinancialSourceCreatedResult {}
