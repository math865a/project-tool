import { api } from "@libs/config";
import { FinancialSourceViewRow } from "@shared";

export async function financialSourcesViewLoader() {
    return await api
        .get<FinancialSourceViewRow[]>("financialsources")
        .then((res) => res.data);
}
