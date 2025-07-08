export function getSafeDate(date: Date | string | number): Date {
    if (date instanceof Date) {
        return date;
    } else if (typeof date === "string" || typeof date === "number") {
        const parsedDate = new Date(date);
        if (!isNaN(parsedDate.getTime())) {
            return parsedDate;
        }
    }
    throw new Error("Invalid date input");
}

export function getSafeTime(date: Date | string | number): number {
    const safeDate = getSafeDate(date);
    return safeDate.getTime();
}
