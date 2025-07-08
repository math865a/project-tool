import { IsString, IsNotEmpty } from "class-validator";

export class LinkUserDto {
    @IsString()
    @IsNotEmpty()
    public readonly uid: string;

    @IsString()
    @IsNotEmpty()
    public readonly id: string;
}
