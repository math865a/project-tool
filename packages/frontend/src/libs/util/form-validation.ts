import _ from "lodash";

function notEmpty(value: string | any[], message?: string) {
    if (_.isEmpty(value)) {
        return message ?? "Dette felt skal udfyldes";
    }
    return null;
}

function isEmail(value: string, message?: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return null;
    }
    return message ?? "Indtast en gyldig email";
}

function hasLength(
    value: string | any[],
    length: number | { min?: number; max?: number },
    message?: string,
) {
    if (typeof length === "number") {
        if (value.length === length) {
            return null;
        }
    } else {
        if (length.min && length.max) {
            if (value.length >= length.min && value.length <= length.max) {
                return null;
            } else {
                return (
                    message ??
                    `Dette felt skal være mellem ${length.min} og ${length.max} tegn langt`
                );
            }
        } else if (length.min) {
            if (value.length >= length.min) {
                return null;
            } else {
                return (
                    message ??
                    `Dette felt skal være mindst ${length.min} tegn langt`
                );
            }
        } else if (length.max) {
            if (value.length <= length.max) {
                return null;
            } else {
                return (
                    message ??
                    `Dette felt skal være højst ${length.max} tegn langt`
                );
            }
        }
    }
    return null;
}

function inRange(
    value: number,
    range: { min?: number; max?: number },
    message?: string,
) {
    if (range.min && range.max) {
        if (value >= range.min && value <= range.max) {
            return null;
        } else {
            return (
                message ??
                `Dette felt skal være mellem ${range.min} og ${range.max}`
            );
        }
    } else if (range.min) {
        if (value >= range.min) {
            return null;
        } else {
            return message ?? `Dette felt skal være mindst ${range.min}`;
        }
    } else if (range.max) {
        if (value <= range.max) {
            return null;
        } else {
            return message ?? `Dette felt skal være højst ${range.max}`;
        }
    }
    return null;
}

function contains(value: string, substring: string, message?: string) {
    if (value.includes(substring)) {
        return null;
    }
    return message ?? `Dette felt skal indeholde ${substring}`;
}

function matches<T extends string | number | boolean = any>(
    value: T,
    match: T,
    message?: string,
) {
    if (value === match) {
        return null;
    }
    return message ?? `Dette felt skal være ${match}`;
}

/*create a set of common form field validation functions*/

export const validators = {
    notEmpty,
    isEmail,
    hasLength,
    inRange,
    contains,
    matches,
};
