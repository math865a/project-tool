import { IsString, IsNotEmpty } from "class-validator";

export class UpdateContractDto {
    @IsString()
    @IsNotEmpty()
    public readonly contractId: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    @IsNotEmpty()
    public readonly abbrevation: string;
}
