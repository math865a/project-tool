import _ from "lodash";
import { computed } from "mobx";
import {
    getParent,
    getRoot,
    Model,
    model,
    modelAction,
    prop,
} from "mobx-keystone";

import { Assignment } from "./assignment";
import { DateTime as dt, Interval as int } from "luxon";
import { Allocation, Gantt } from "@libs/features";

@model("assignment-canvas")
export class AssignmentCanvas extends Model(
    { isDragging: prop<boolean>(false).withSetter() },
    { valueType: true },
) {
    @computed
    get Store() {
        return getRoot<Gantt>(this).AllotmentStore;
    }

    @computed
    get Dimensions() {
        return getRoot<Gantt>(this).Dimensions;
    }

    @computed
    get Assignment() {
        return getParent<Assignment>(this);
    }

    @modelAction
    addAllocation = (days: int) => {
        if (!this.Assignment || !this.Assignment.Task) return;
        let start = dt.max(
            days.start as dt,
            this.Assignment.Task.Interval.interval.start as dt,
        );
        let end = dt.min(
            days.end as dt,
            this.Assignment.Task.Interval.interval.end as dt,
        );

        if (start === end) {
            if (start === this.Assignment.Task.Interval.interval.start) {
                end = end.plus({ days: 1 });
            } else {
                start = start.minus({ days: 1 });
            }
        }

        const Allocation: Allocation = this.Store.addAllocation(
            this.Assignment,
            int.fromDateTimes(start, end),
        );
        return Allocation.id;
    };

    @computed
    get TaskBar() {
        return this.Assignment?.Task?.Bar;
    }

    @computed
    get tCoord() {
        if (!this.TaskBar)
            return {
                x: 0,
                w: 0,
            };
        return this.TaskBar.coord;
    }

    @computed
    get inBounds() {
        if (!this.TaskBar) {
            return {
                x: 0,
                w: 0,
            };
        }
        return {
            x: this.TaskBar.p0.x1 + this.TaskBar.dx,
            w: this.TaskBar.w0 + this.TaskBar.dw,
        };
    }

    @computed
    get outOfBounds() {
        if (!this.TaskBar) {
            return {
                start: {
                    x: 0,
                    w: 0,
                },
                end: {
                    x: 0,
                    w: 0,
                },
            };
        }
        return {
            start: {
                x: 0,
                w: this.tCoord.x - 7.5,
            },
            end: {
                x: this.tCoord.x + this.tCoord.w + 7.5,
                w:
                    this.Dimensions.TimelineWidth -
                    this.tCoord.x +
                    this.tCoord.w,
            },
        };
    }

    @computed
    get isDraggingAllocation() {
        return _.some(
            this.Assignment?.Allocations ?? [],
            (d) => d.Bar.event !== null,
        );
    }

    @computed
    get isHoveringAllocation() {
        return _.some(
            this.Assignment?.Allocations ?? [],
            (d) => d.Bar.isHovering,
        );
    }

    @computed
    get selectionColor() {
        return this.Assignment?.TeamMember?.resource.color ?? "#CECECE";
    }
}
