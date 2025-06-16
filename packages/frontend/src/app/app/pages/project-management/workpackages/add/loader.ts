import { Option, StageOption } from "@shared";
import { api } from "@libs/config";

export interface AddWorkpackageData {
    projectManagers: Option[];
    defaultProjectManagerId: string;
    contracts: Option[];
    financialSources: Option[];
    stages: StageOption[];
    defaultStageId: string;
}

export async function addWorkpackageLoader(): Promise<AddWorkpackageData> {
    return await Promise.all([
        getProjectManagers(),
        getDefaultProjectManagerId(),
        getContracts(),
        getFinancialSources(),
        getStages(),
    ]).then((res) => ({
        projectManagers: res[0],
        defaultProjectManagerId: res[1],
        contracts: res[2],
        financialSources: res[3],
        stages: res[4],
        defaultStageId: res[4][0].value,
    }));
}

async function getProjectManagers() {
    return await api
        .get<Option[]>("project-managers/options")
        .then((res) => res.data);
}

async function getDefaultProjectManagerId() {
    return api
        .get<Option>("project-managers/default")
        .then((res) => res.data.value);
}

async function getContracts() {
    return await api.get<Option[]>("contracts/options").then((res) => res.data);
}

async function getFinancialSources() {
    return await api
        .get<Option[]>("financialsources/options")
        .then((res) => res.data);
}

async function getStages() {
    return await api
        .get<StageOption[]>("workpackages/stages")
        .then((res) => res.data);
}
