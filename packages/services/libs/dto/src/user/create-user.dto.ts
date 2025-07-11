import {
    ArrayMinSize,
    IsArray,
    IsBoolean,
    IsEmail,
    IsHexColor,
    IsNotEmpty,
    IsOptional,
    IsString,
} from "class-validator";
import { CreateResourceDto } from "../resource";

export class CreateUserDto {
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

    @IsArray()
    @ArrayMinSize(1)
    @IsString({ each: true })
    public readonly accessGroups: string[];

    @IsBoolean()
    public readonly isProjectManager: boolean;

    @IsBoolean()
    public readonly isResource: boolean;

    @IsString()
    public readonly connect: string;

    @IsOptional()
    public readonly resourceDto?: Omit<
        CreateResourceDto,
        "id" | "name" | "color"
    >;

    @IsBoolean()
    public readonly sendWelcomeEmail: boolean;
}
