import { model, Model, modelAction, prop } from "mobx-keystone";
import { computed } from "mobx";
import { Rate } from "@libs/features";
import { getAvatarName } from "@libs/util";
import { ResourceJson } from "@shared";

@model("resource")
export class Resource extends Model(
    {
        id: prop<string>(),
        name: prop<string>().withSetter(),
        color: prop<string>().withSetter(),
        costRate: prop<Rate>(),
    },
    {
        valueType: true,
        toSnapshotProcessor(sn) {
            return {
                id: sn.id,
                name: sn.name,
                color: sn.color,
                costRate: {
                    default: sn.costRate.default,
                    overtime: sn.costRate.overtime,
                },
            };
        },
    },
) {
    @computed
    get avatarName() {
        return getAvatarName(this.name);
    }

    @modelAction
    update(json: ResourceJson) {
        this.setName(json.name);
        this.setColor(json.color);
        this.costRate.update(json.costRate);
    }
}
