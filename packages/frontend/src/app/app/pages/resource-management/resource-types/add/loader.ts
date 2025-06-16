import { CalendarNode, Option } from '@shared';
import { api } from '@libs/config';

export interface AddResourceTypeData {
    resources: Option[];
    contracts: Option[];
}

export async function addResourceTypeLoader(): Promise<AddResourceTypeData> {
    return await Promise.all([
        getResourceOptions(),
        getContractOptions()
    ]).then((res) => ({
        resources: res[0],
        contracts: res[1]
    }));
}

async function getResourceOptions(): Promise<Option[]>{
    return await api.get("resources/options").then(res => res.data)
}

async function getContractOptions(): Promise<Option[]>{
    return await api.get("contracts/options").then(res => res.data)
}