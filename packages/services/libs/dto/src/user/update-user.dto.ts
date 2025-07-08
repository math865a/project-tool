import {
    IsArray,
    IsBoolean,
    IsEmail,
    IsHexColor,
    IsNotEmpty,
    IsString,
} from "class-validator";

export class UpdateUserDto {
    @IsString()
    @IsNotEmpty()
    public readonly uid: string;

    @IsEmail()
    public readonly email: string;

    @IsArray()
    @IsString({ each: true })
    public readonly accessGroups: string[];

    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    @IsHexColor()
    public readonly color: string;

    @IsBoolean()
    public readonly isDeactivated: boolean;
}
