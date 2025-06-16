import { api } from "@libs/config";
import { WorkpackageViewRow } from "@shared";

export async function workpackagesViewLoader() {
    return await api
        .get<WorkpackageViewRow[]>("workpackages")
        .then((res) => res.data);
}
