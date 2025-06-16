import { ActionFunctionArgs, redirect } from "react-router-dom";
import { parseRequest } from "@libs/util";
import { api } from "@libs/config";
import { CreateFinancialSourceDto, FormResponse } from "@shared";

export async function addFinancialSourceAction({
    request,
}: ActionFunctionArgs) {
    const body: { data: CreateFinancialSourceDto } =
        await parseRequest(request);
    const result = await api
        .post<FormResponse>("financialsources", body.data)
        .then((res) => res.data);

    if (result.status === "ok") {
        return redirect("/financialsources");
    }

    return result;
}
