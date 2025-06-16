import { ActionFunctionArgs, redirect } from "react-router-dom";
import { parseRequest } from "@libs/util";
import { api } from "@libs/config";
import { CreateContractDto, FormResponse } from "@shared";

export async function addContractAction({ request }: ActionFunctionArgs) {
    const body: { data: CreateContractDto } = await parseRequest(request);
    const result = await api
        .post<FormResponse>("contracts", body.data)
        .then((res) => res.data);

    if (result.status === "ok") {
        return redirect("/contracts");
    }

    return result;
}
