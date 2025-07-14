import {
    ActionFunctionArgs,
    json,
    LoaderFunctionArgs,
    redirect,
} from "@remix-run/node";
import invariant from "tiny-invariant";
import { getServiceUrl } from "~/server";
import { sendRequest } from "~/session.server";
import { Page } from "~/src/design-system";
import DetailsSection from "./Details.Section";
import HeaderSection from "./Header.Section";
import WorkpackagesSection from "./Workpackages.Section";
import { IProjectManagerProfile } from "./types";
import { useRouteLoaderData } from "@remix-run/react";
import BackAction from "~/src/layout/topbar/BackAction";

import { parseRequest } from "~/util/formData";
import { HasAccess, Subject } from "~/src";
import { namedAction } from "~/util";

export const handle = {
    BackAction: <PageContext />,
};

function PageContext() {
    const { node } = useRouteLoaderData(
        "routes/app.project-managers_.$projectmanagerId"
    ) as IProjectManagerProfile;
    return (
        <BackAction
            title={`${node.name} (Projektleder)`}
            backTo="/app/project-managers"
        />
    );
}

export async function loader({
    request,
    params,
}: LoaderFunctionArgs): Promise<IProjectManagerProfile> {
    invariant(params.projectmanagerId, "Missing projectmanagerId");
    return await sendRequest(request, {
        url: getServiceUrl("projectManager", params.projectmanagerId),
        method: "GET",
    });
}

export async function action({ request, params }: ActionFunctionArgs) {
    invariant(params.projectmanagerId, "Missing projectmanagerId");
    return namedAction(request, {
        async deleteProjectManager() {
            const result = await sendRequest(request, {
                url: getServiceUrl("projectManager", params.projectmanagerId),
                method: "DELETE",
            });
            if (result.status === "ok") {
                return redirect("/app/project-managers");
            }
            return json(result);
        },
        async deleteResource() {
            return await sendRequest(request, {
                url: getServiceUrl("resources", params.projectmanagerId),
                method: "DELETE",
            });
        },
        async updateDetails() {
            return await sendRequest(request, {
                url: getServiceUrl("projectManager", params.projectmanagerId),
                method: "POST",
                body: await parseRequest(request),
            });
        },
    });
}

export type ProjectManagerLoader = typeof loader;
export default function ProjectManagerProfile() {
    return (
        <HasAccess to={Subject.ProjectManagers}>
            <Page.Root maxWidth="xl">
                <Page.Layout>
                    <HeaderSection />
                    <DetailsSection />
                    <WorkpackagesSection />
                </Page.Layout>
            </Page.Root>
        </HasAccess>
    );
}
