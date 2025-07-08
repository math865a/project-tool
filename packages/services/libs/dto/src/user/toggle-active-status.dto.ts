import { IsString, IsBoolean, IsNotEmpty } from "class-validator";

export class ToggleActiveStatusDto {
    @IsString()
    @IsNotEmpty()
    public readonly uid: string;

    @IsBoolean()
    public readonly isDeactivated: boolean;
}
