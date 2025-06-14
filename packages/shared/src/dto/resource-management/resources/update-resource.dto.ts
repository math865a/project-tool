export class UpdateResourceDto {
    public readonly resourceId: string;
    public readonly name: string;
    public readonly initials: string;
    public readonly costDefault: number;
    public readonly costOvertime: number;
}
