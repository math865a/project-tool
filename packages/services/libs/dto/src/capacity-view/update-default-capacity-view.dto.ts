import { IsString, IsBoolean, IsNotEmpty } from "class-validator";

export class UpdateDefaultCapacityViewDto {
    @IsString()
    @IsNotEmpty()
    public readonly viewId: string;

    @IsBoolean()
    public readonly isDefault: boolean;
}
