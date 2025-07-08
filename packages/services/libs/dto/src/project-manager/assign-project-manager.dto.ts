import { IsString, IsNotEmpty } from "class-validator";

export class AssignProjectManagerDto {
    @IsString()
    @IsNotEmpty()
    public readonly projectManagerId: string;

    @IsString()
    @IsNotEmpty()
    public readonly workpackageId: string;
}
