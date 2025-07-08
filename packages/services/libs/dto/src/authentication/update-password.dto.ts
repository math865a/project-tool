import { IsString, IsNotEmpty, MinLength, Matches } from "class-validator";

export class UpdatePasswordDto {
    @IsString()
    @IsNotEmpty()
    public readonly oldPassword: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
        message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    })
    public readonly password: string;

    @IsString()
    @IsNotEmpty()
    public readonly confirmPassword: string;
}
