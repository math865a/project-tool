import { IsNumber, IsOptional } from "class-validator";

export class GetActivitiesQuery {
    @IsNumber()
    @IsOptional()
    public readonly pageSize: number;

    @IsNumber()
    @IsOptional()
    public readonly page: number;
}
