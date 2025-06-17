import { getRoot, Model, model, modelAction, prop } from "mobx-keystone";
import { DateTime as dt, Duration as dur } from "luxon";
import {
    Gantt,
    TimelineDrag,
    TimelineEvent,
    TimelineIntervals,
} from "@libs/features";
import { computed, reaction, when } from "mobx";
import { Timeline_PADDING } from "@libs/features/gantt/_shared";
import { getInterval } from "@libs/util";
import { scaleLinear } from "@visx/scale";

// dpx = width / days
// width = dpx * days
// days = width / dpx

@model("/Timeline")
export class Timeline extends Model({
    //dpx: prop<number>(80).withSetter(),
    ds: prop<number>(() => dt.now().setZone("utc").toMillis()).withSetter(),
    df: prop<number>(() =>
        dt.now().plus({ months: 1 }).toMillis(),
    ).withSetter(),
    dxBounds: prop<number>(0).withSetter(),
    dtBounds: prop<number>(0).withSetter(),
    TimelineEvent: prop<TimelineEvent>(() => new TimelineEvent({})),
    TimelineDrag: prop<TimelineDrag>(() => new TimelineDrag({})),
    TimelineIntervals: prop<TimelineIntervals>(() => new TimelineIntervals({})),
    dpxBounds: prop<{ min: number; max: number }>(() => ({ min: 1, max: 75 })),
    isDraggingPeriod: prop<boolean>(false).withSetter(),
}) {
    @computed
    get Dimensions() {
        return getRoot<Gantt>(this).Dimensions;
    }

    @computed
    get Table() {
        return getRoot<Gantt>(this).Table;
    }

    @computed
    get Plan() {
        return getRoot<Gantt>(this).ActivityStore.Plan;
    }

    @computed
    get captureSpanTrigger() {
        return {
            isMounted: this.Table.isMounted,
            planExists: this.Plan !== undefined,
        };
    }

    onAttachedToRootStore() {
        when(
            () => this.captureSpanTrigger.planExists,
            () => this.captureNodeSpan(),
        );

        reaction(
            () => this.captureSpanTrigger,
            (trigger) => {
                if (trigger.isMounted && trigger.planExists) {
                    this.captureNodeSpan();
                }
            },
        );
    }

    @modelAction
    updatePeriod(dts: number, dtf: number) {
        this.setDs(this.ds + dts);
        this.setDf(this.df + dtf);
    }

    /*
	@modelAction
	handleDrag = (dx: number) => {
		if (dx === 0) return;
		const dt = this.dtScale.invert(dx);
		this.setDs(this.ds + dt);
		this.setDf(this.df + dt);
	};*/

    @modelAction
    handleZoom = (value: number) => {
        const days = this.Dimensions.TimelineWidth / value;
        const diff = days - this.dayCount;
        const dt = dur.fromObject({ days: diff / 2 }).toMillis();
        this.updatePeriod(-dt, dt);
        /* this.setDs(this.ds - dt);
		 this.setDf(this.df + dt);*/
    };

    @modelAction
    zoom(sign: -1 | 1) {
        const amount = this.dt * Timeline_PADDING;
        this.updatePeriod(sign * amount, -sign * amount);
        /* this.setDs(this.ds + sign * amount);
		 this.setDf(this.df - sign * amount);*/
    }

    @modelAction
    captureNodeSpan() {
        const plan = getRoot<Gantt>(this).ActivityStore.Plan;
        if (!plan) {
            throw new Error("no plan");
        }

        const padding = plan.Interval.dt * Timeline_PADDING;
        this.setDs(plan.Interval.startDate.toMillis() - padding);
        this.setDf(plan.Interval.endDate.toMillis() + padding);
    }

    @computed
    get nodeSpan() {
        const plan = getRoot<Gantt>(this).ActivityStore.Plan;
        if (plan) {
            const padding = plan.Interval.dt * Timeline_PADDING;
            return {
                start: plan.Interval.sNorm - padding,
                end: plan.Interval.fNorm + padding,
            };
        }
        return {
            start: 0,
            end: 0,
        };
    }

    @computed
    get isCurrentlyNodeSpan() {
        return this.ds === this.nodeSpan.start && this.df === this.nodeSpan.end;
    }

    @modelAction
    handleBoundaryCollision(dx: number) {
        this.setDxBounds(dx);
        this.setDtBounds(this.dtScale.invert(dx));
    }

    @modelAction
    handleDragEnd() {
        this.setDs(this.ds + this.dtScale.invert(this.dxBounds));

        this.setDtBounds(0);
    }

    @computed
    get interval() {
        return getInterval(this.ds, this.df);
    }

    @computed
    get dt() {
        return this.interval.toDuration("milliseconds").milliseconds;
    }

    @computed
    get dayCount() {
        return this.interval.toDuration("days").days;
    }

    @computed
    get dpx() {
        return Math.min(
            Math.max(
                this.Dimensions.TimelineWidth / this.dayCount,
                this.dpxBounds.min,
            ),
            this.dpxBounds.max,
        );
    }

    @computed
    get atDpxLimit() {
        return (
            this.dpx === this.dpxBounds.max || this.dpx === this.dpxBounds.min
        );
    }

    /*
	@computed
	get df() {
		return this.ds + this.dt;
	}
*/

    @computed
    get boundaryInterval() {
        const dt = this.dtScale.invert(this.dxBounds);
        return getInterval(this.ds + dt, this.df + dt);
    }

    @computed
    get xScale() {
        return scaleLinear({
            domain: [this.ds, this.df],
            range: [
                -this.dxBounds,
                this.Dimensions.TimelineWidth - this.dxBounds,
            ],
        });
    }

    @computed
    get dtScale() {
        return scaleLinear({
            domain: [0, this.dt],
            range: [0, this.Dimensions.TimelineWidth],
        });
    }

    @computed
    get wDay() {
        return this.dtScale(dur.fromObject({ days: 1 }).toMillis());
    }

    @computed
    get slideZoneWidth() {
        return this.Dimensions.TimelineWidth * 0.075;
    }
}
