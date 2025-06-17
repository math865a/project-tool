import { getRoot, Model, model, prop } from "mobx-keystone";
import { computed } from "mobx";
import { Gantt } from "@libs/features";
import { HandlerArgs } from "@visx/drag/lib/useDrag";

@model("Timeline-drag")
export class TimelineDrag extends Model({
    lastDx: prop<number>(0).withSetter(),
    isDragging: prop<boolean>(false).withSetter(),
}) {
    @computed
    get Timeline() {
        return getRoot<Gantt>(this).Timeline;
    }

    @computed
    get Dimensions() {
        return getRoot<Gantt>(this).Dimensions;
    }

    handleDragStart = () => {
        this.setLastDx(
            this.Dimensions.dialogDimensions.width -
                this.Dimensions.TimelineWidth,
        );
        this.setIsDragging(true);
    };

    handleDragMove = (args: HandlerArgs) => {
        const dx = this.lastDx - args.dx;
        if (dx !== 0) {
            const dt = this.getDt(dx);
            this.Timeline.updatePeriod(dt, dt);
        }
        this.setLastDx(args.dx);
    };

    handleDragEnd = () => {
        this.setLastDx(
            this.Dimensions.dialogDimensions.width -
                this.Dimensions.TimelineWidth,
        );
        this.setIsDragging(false);
    };

    getDt(dx: number) {
        return this.Timeline.dtScale.invert(dx);
    }

    @computed
    get cursor() {
        return this.isDragging ? "grabbing" : "grab";
    }

    @computed
    get handlers() {
        return {
            onDragStart: this.handleDragStart,
            onDragMove: this.handleDragMove,
            onDragEnd: this.handleDragEnd,
        };
    }
}
