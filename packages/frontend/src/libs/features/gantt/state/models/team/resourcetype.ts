import { model, Model, modelAction, prop } from "mobx-keystone";
import { Rate } from "@libs/features";
import { ResourceTypeJson } from "@shared";

@model("resource-type")
export class ResourceType extends Model(
    {
        id: prop<string>(),
        abbrevation: prop<string>(),
        name: prop<string>().withSetter(),
        typeNo: prop<number>().withSetter(),
        salesRate: prop<Rate>(),
    },
    {
        valueType: true,
        toSnapshotProcessor(sn) {
            return {
                id: sn.id,
                name: sn.name,
                typeNo: sn.typeNo,
                abbrevation: sn.abbrevation,
                salesRate: {
                    default: sn.salesRate.default,
                    overtime: sn.salesRate.overtime,
                },
            };
        },
    },
) {
    @modelAction
    update(json: ResourceTypeJson) {
        this.setName(json.name);
        this.setTypeNo(json.typeNo);
        this.salesRate.update(json.salesRate);
    }
}
