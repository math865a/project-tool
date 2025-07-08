import { IsString, IsNotEmpty } from "class-validator";

export class UpdateCapacityViewNameDto {
    @IsString()
    @IsNotEmpty()
    public readonly viewId: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;
}
