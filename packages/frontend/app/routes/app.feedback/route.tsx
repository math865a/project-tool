import { ActionFunctionArgs } from "@remix-run/server-runtime";
import { getServiceUrl } from "~/server";
import { sendRequest } from "~/session.server";
import { parseRequest } from "~/util";

export async function action({ request }: ActionFunctionArgs) {
    return await sendRequest(request, {
        url: getServiceUrl("feedback"),
        method: "POST",
        body: await parseRequest(request),
    });
}
