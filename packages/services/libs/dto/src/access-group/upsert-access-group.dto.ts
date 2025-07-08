import { OmitType } from "@nestjs/mapped-types";
import {
    IsArray,
    IsBoolean,
    IsHexColor,
    IsNotEmpty,
    IsObject,
    IsString,
} from "class-validator";
import { IPermissions, PipedPermission } from "@ns/definitions";

export class UpsertAccessGroupDto {
    @IsString()
    @IsNotEmpty()
    public readonly id: string;

    @IsString()
    @IsNotEmpty()
    public readonly name: string;

    @IsString()
    @IsNotEmpty()
    public readonly description: string;

    @IsString()
    @IsHexColor()
    public readonly color: string;

    @IsBoolean()
    public readonly isAdmin: boolean;

    @IsArray()
    @IsString({ each: true })
    public readonly users: string[];

    @IsObject()
    public readonly permissions: {
        [pageName: string]: IPermissions;
    };
}

export class PipedUpsertAccessGroupDto extends OmitType(UpsertAccessGroupDto, [
    "permissions",
]) {
    @IsArray()
    public readonly permissions: PipedPermission[];
}
