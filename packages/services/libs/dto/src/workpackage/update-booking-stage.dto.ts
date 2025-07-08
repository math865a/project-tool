import { IsString, IsNotEmpty } from "class-validator";

export class UpdateBookingStageDto {
    @IsString()
    @IsNotEmpty()
    public readonly workpackageId: string;

    @IsString()
    @IsNotEmpty()
    public readonly bookingStage: string;
}
