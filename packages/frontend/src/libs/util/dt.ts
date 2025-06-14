import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import advancedFormat from "dayjs/plugin/advancedFormat";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import weekYear from "dayjs/plugin/weekYear";
import isoWeek from "dayjs/plugin/isoWeek";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import minMax from "dayjs/plugin/minMax";
import timezone from "dayjs/plugin/timezone";
import toObject from "dayjs/plugin/toObject";
import localizedFormat from "dayjs/plugin/localizedFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import dayjs from "dayjs";

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(advancedFormat);
dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(isTomorrow);
dayjs.extend(weekYear);
dayjs.extend(isoWeek);
dayjs.extend(quarterOfYear);
dayjs.extend(minMax);
dayjs.extend(timezone);
dayjs.extend(toObject);
dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
    weekStart: 1,
});
export const dt = dayjs;



const dur = dt.duration({months: 12})