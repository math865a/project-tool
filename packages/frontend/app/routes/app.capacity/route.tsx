import { LoaderFunctionArgs } from "@remix-run/node";
import { sendRequest } from "session";
import CapacityBoard from "~/src/features/capacity";
import { getServiceUrl } from "~/server";
import { Action as A, Subject } from "~/src/_definitions";
import { Fallback, Page } from "~/src/design-system";
import BackAction from "~/src/layout/topbar/BackAction";
import { Can } from "~/src/session-user";

export const handle = {
    BackAction: <BackAction title="Kapacitet" noBack />,
};

export async function loader({ request }: LoaderFunctionArgs) {
    return await sendRequest(request, {
        url: getServiceUrl("capacityBoard", "rows"),
        method: "GET",
    });
}

export default function CapacityBoardPage() {
    return (
        <Can I={A.Read} a={Subject.Capacity} passThrough>
            {(allowed) =>
                allowed ? (
                    <Page.Root maxWidth="xl">
                        <Page.Layout>
                            <CapacityBoard />
                        </Page.Layout>
                    </Page.Root>
                ) : (
                    <Fallback.AccessDenied />
                )
            }
        </Can>
    );
}
