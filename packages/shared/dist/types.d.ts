export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    department: string;
}
export interface Shift {
    id: string;
    employeeId: string;
    startTime: Date;
    endTime: Date;
    status: ShiftStatus;
    type: ShiftType;
}
export declare enum ShiftStatus {
    SCHEDULED = "SCHEDULED",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare enum ShiftType {
    REGULAR = "REGULAR",
    OVERTIME = "OVERTIME",
    ON_CALL = "ON_CALL"
}
export interface Schedule {
    id: string;
    weekStart: Date;
    weekEnd: Date;
    shifts: Shift[];
    status: ScheduleStatus;
}
export declare enum ScheduleStatus {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
    ARCHIVED = "ARCHIVED"
}
