import { IsEmail, IsString, IsNotEmpty } from "class-validator";

export class ValidateCredentialsDto {
    @IsEmail()
    public readonly email: string;

    @IsString()
    @IsNotEmpty()
    public readonly password: string;
}
