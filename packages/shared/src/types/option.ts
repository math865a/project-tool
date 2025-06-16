export interface Option {
    value: string;
    label: string;
    color?: string;
}

export interface StageOption extends Option {
    sequence: number;
}
