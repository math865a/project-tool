import { IsString, IsEmail, IsNotEmpty, IsHexColor } from "class-validator";

export class UpdateUserDetailsDto {
    @IsString()
    @IsNotEmpty()
    public readonly uid: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsEmail()
    public readonly email: string;

    @IsString()
    @IsHexColor()
    public readonly color: string;
}
