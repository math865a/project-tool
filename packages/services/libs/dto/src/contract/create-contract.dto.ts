import { IsString, IsNotEmpty } from "class-validator";

export class CreateContractDto {
    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    @IsNotEmpty()
    public readonly abbrevation: string;
}
