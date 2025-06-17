import { model, Model, modelAction, prop, rootRef } from "mobx-keystone";
import { computed } from "mobx";
import { Timeline_PADDING } from "@libs/features/gantt/_shared";
import _ from "lodash";

@model("Dimensions")
export class Dimensions extends Model({
    TimelineWidth: prop<number>(300).withSetter(),
    TableWidth: prop<number>(300).withSetter(),
    width: prop<number>(0).withSetter(),
    height: prop<number>(0).withSetter(),
    left: prop<number>(0).withSetter(),
    top: prop<number>(0).withSetter(),
    right: prop<number>(0).withSetter(),
    bottom: prop<number>(0).withSetter(),
    identityWidth: prop<number>(175),
    dialogDimensions: prop<{ width: number; height: number }>(() => ({
        width: 1200,
        height: 800,
    })).withSetter(),
}) {
    @modelAction
    updateDialogDimensions(width: number, height: number) {
        this.setDialogDimensions({
            width: _.round(width),
            height: _.round(height),
        });
    }

    @modelAction
    onTimelineResize(dx: number) {
        this.setTimelineWidth(this.width - dx);
        this.setTableWidth(this.width - this.TimelineWidth);
    }

    @computed
    get ratio() {
        return _.round(
            this.TimelineWidth / (this.TableWidth + this.TimelineWidth),
            2,
        );
    }

    @computed
    get TimelinePadding() {
        return this.TimelineWidth * Timeline_PADDING;
    }

    static ref = rootRef<Dimensions>("DimensionsRef");
}
