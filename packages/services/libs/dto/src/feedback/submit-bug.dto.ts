import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { FeedbackType } from "@ns/definitions";
import { SubmissionBase } from "./submit-feedback-base.dto";

export class SubmitBugDto extends SubmissionBase {
    @IsEnum(FeedbackType)
    public readonly type: FeedbackType.Bug;

    public readonly submission: Submission;
}

class Submission {
    @IsString()
    @IsNotEmpty()
    public readonly summary: string;

    @IsNumber()
    public readonly priority: number;

    @IsString()
    @IsNotEmpty()
    public readonly page: string;

    @IsString()
    @IsNotEmpty()
    public readonly stepsToReproduce: string;

    @IsString()
    @IsNotEmpty()
    public readonly expectedResult: string;

    @IsString()
    @IsNotEmpty()
    public readonly actualResult: string;

    @IsString()
    public readonly remarks: string;
}
