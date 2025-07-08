import { IsString, IsEmail, IsBoolean, IsNotEmpty } from "class-validator";

export class CreateCredentialsDto {
    @IsString()
    @IsNotEmpty()
    public uid: string;

    @IsEmail()
    public email: string;

    @IsBoolean()
    public sendWelcomeEmail: boolean;
}
