import invariant from "tiny-invariant";
import { getServiceUrl } from "~/server";
import { sendRequest } from "~/session.server";
import { ActionFunctionArgs } from "@remix-run/node";

export async function action({ request, params }: ActionFunctionArgs) {
    invariant(params.uid);
    return await sendRequest(request, {
        url: getServiceUrl("users", "create-project-manager", params.uid),
        method: "POST",
    });
}
