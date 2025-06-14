"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleStatus = exports.ShiftType = exports.ShiftStatus = void 0;
var ShiftStatus;
(function (ShiftStatus) {
    ShiftStatus["SCHEDULED"] = "SCHEDULED";
    ShiftStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ShiftStatus["COMPLETED"] = "COMPLETED";
    ShiftStatus["CANCELLED"] = "CANCELLED";
})(ShiftStatus || (exports.ShiftStatus = ShiftStatus = {}));
var ShiftType;
(function (ShiftType) {
    ShiftType["REGULAR"] = "REGULAR";
    ShiftType["OVERTIME"] = "OVERTIME";
    ShiftType["ON_CALL"] = "ON_CALL";
})(ShiftType || (exports.ShiftType = ShiftType = {}));
var ScheduleStatus;
(function (ScheduleStatus) {
    ScheduleStatus["DRAFT"] = "DRAFT";
    ScheduleStatus["PUBLISHED"] = "PUBLISHED";
    ScheduleStatus["ARCHIVED"] = "ARCHIVED";
})(ScheduleStatus || (exports.ScheduleStatus = ScheduleStatus = {}));
