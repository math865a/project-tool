import _ from "lodash";
import { Duration as dur } from "luxon";

export function getHours(millis: number = 0) {
    return round(dur.fromMillis(millis).shiftTo("hours").hours ?? 0);
}

export function round(num: number, decimals: number = 2) {
    const fac = 10 * decimals;
    return Math.round(num * fac) / fac;
}

export function suffix(value: any, prefix: string = "kr") {
    return `${value}${prefix}`;
}

export function formatThousands(number: number) {
    return Intl.NumberFormat("da-DK", {}).format(number);
    // return format(",")(number).replace(",", ".");
}
type displayNumberOptions =
    | string
    | {
          unit?: string;
          decimals?: number;
      };
export function displayNumber(
    number: number,
    options: displayNumberOptions = "",
) {
    let unit: string = "";
    let decimals: number = 2;

    if (typeof options === "object") {
        unit = options.unit ?? "";
        decimals = options.decimals ?? 2;
    } else {
        unit = options;
    }

    return (
        Intl.NumberFormat("da-DK", {
            maximumFractionDigits: decimals,
        }).format(number) + unit
    );
    // return format(",")(number).replace(",", ".");
}

const DKK = Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    maximumFractionDigits: 0,
});

export function formatDKK(val: number) {
    return DKK.format(val);
}

export function formatDecimal(number: number) {
    return String(number).replace(".", ",");
}
export function compressAmount(number: number) {
    if (number > 1000) {
        return suffix(formatDecimal(_.round(number / 1000, 1)), "k");
    }
    return suffix(formatThousands(number), "kr.");
}

export function inThousands(number: number) {
    return formatDecimal(_.round(number / 1000, 1));
}

export function getAvatarName(name: string) {
    const split = _.split(name, " ");

    if (split.length === 1 || (split.length === 2 && split[1] === "")) {
        return _.upperCase(name.substring(0, 2));
    }
    if (split.length > 2) {
        const last = split[split.length - 1];
        return _.upperCase(name[0] + last[0]);
    }
    return _.upperCase(name[0] + split[1][0]);
}

export function getFullName(obj: { firstName: string; lastName: string }) {
    return `${obj.firstName} ${obj.lastName}`;
}
