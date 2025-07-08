import { IsEnum, IsString, IsNotEmpty } from "class-validator";
import { FeedbackType } from "@ns/definitions";
import { SubmissionBase } from "./submit-feedback-base.dto";

export class SubmitOpinionDto extends SubmissionBase {
    @IsEnum(FeedbackType)
    public readonly type: FeedbackType.Opinion;

    public readonly submission: Submission;
}

class Submission {
    @IsString()
    @IsNotEmpty()
    public readonly topic: string;

    @IsString()
    @IsNotEmpty()
    public readonly text: string;
}
