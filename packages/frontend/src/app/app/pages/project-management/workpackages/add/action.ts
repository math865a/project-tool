import { ActionFunctionArgs, redirect } from "react-router-dom";
import { parseRequest } from "@libs/util";
import { api } from "@libs/config";
import { CreateWorkpackageDto, FormResponse } from "@shared";

export async function addWorkpackageAction({ request }: ActionFunctionArgs) {
    const body: { data: CreateWorkpackageDto } = await parseRequest(request);
    const result = await api
        .post<FormResponse>("workpackages", body.data)
        .then((res) => res.data);

    if (result.status === "ok") {
        return redirect("/workpackages");
    }

    return result;
}
