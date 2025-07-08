import { IsString, IsNotEmpty } from "class-validator";
import { ResourceCapacityInstructionsDto } from "./resource-capacity-instruction";

export class WorkpackageTasksDto extends ResourceCapacityInstructionsDto {
    @IsString()
    @IsNotEmpty()
    public readonly workpackageId: string;
}
