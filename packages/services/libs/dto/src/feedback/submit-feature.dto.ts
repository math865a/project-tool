import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { FeedbackType } from "@ns/definitions";
import { SubmissionBase } from "./submit-feedback-base.dto";

export class SubmitFeatureDto extends SubmissionBase {
    @IsEnum(FeedbackType)
    public readonly type: FeedbackType.Feature;

    public readonly submission: Submission;
}

class Submission {
    @IsString()
    @IsNotEmpty()
    page: string;

    @IsString()
    @IsNotEmpty()
    problem: string;

    @IsString()
    @IsNotEmpty()
    impact: string;

    @IsNumber()
    reach: number;

    @IsNumber()
    urgency: number;

    @IsString()
    @IsNotEmpty()
    goals: string;

    @IsString()
    @IsNotEmpty()
    solution: string;

    @IsString()
    remarks: string;
}
