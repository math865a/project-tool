import { IsString, IsUrl } from "class-validator";

export class SubmissionBase {
    @IsString()
    @IsUrl()
    public readonly pageUrl: string;
}
