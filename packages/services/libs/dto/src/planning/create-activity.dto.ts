import { IsString, IsNotEmpty, IsHexColor, IsIn, IsObject, IsArray, IsString as IsStringArray } from "class-validator";

export class TaskProperties {
    @IsString()
    @IsNotEmpty()
    public readonly id: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    @IsNotEmpty()
    public readonly description: string;
}

export class DeliveryProperties extends TaskProperties {
    @IsString()
    @IsHexColor()
    public readonly color: string;
}

export class ParentDto {
    @IsString()
    @IsNotEmpty()
    public readonly id: string;

    @IsArray()
    @IsStringArray({ each: true })
    public readonly children: string[];
}

export class CreateActivityDto {
    @IsString()
    @IsNotEmpty()
    public readonly anchorId: string;

    public readonly properties: TaskProperties | DeliveryProperties;

    @IsObject()
    public readonly parent: ParentDto;

    @IsIn(["Delivery", "Task"])
    public readonly kind: "Delivery" | "Task";
}
