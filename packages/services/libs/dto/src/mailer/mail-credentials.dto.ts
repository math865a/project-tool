import { IsEmail, IsString, IsNotEmpty, MinLength } from "class-validator";

export class MaiLCredentialsDto {
    @IsEmail()
    public readonly email: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    @IsNotEmpty()
    public readonly username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    public readonly password: string;
}
