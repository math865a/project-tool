import { OmitType } from "@nestjs/mapped-types";
import { IsArray, IsString } from "class-validator";
import { CreateCapacityViewDto } from "./create-capacity-view.dto";

export class UpdateCapacityViewDto extends OmitType(CreateCapacityViewDto, [
    "name",
]) {
    @IsArray()
    @IsString({ each: true })
    public readonly resourcesToDelete: string[];

    @IsArray()
    @IsString({ each: true })
    public readonly bookingStagesToDelete: string[];
}
