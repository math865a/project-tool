import { DataTable, useTable } from "@libs/components";
import { Loader } from "@mantine/core";
import { ResourceViewRow } from "@shared";
import React from "react";
import { Await, Outlet, useLoaderData } from "react-router-dom";
import { resourcesColumns } from "./columns";
import { resourcesViewLoader } from "./loader.ts";
import { PageFrame } from "@libs/design";

export function ResourcesViewPage() {
    const data = useLoaderData() as ReturnType<typeof resourcesViewLoader>;

    return (
        <PageFrame>
            <React.Suspense fallback={<Loader />}>
                <Await resolve={data}>
                    {(resolvedData) => <Component data={resolvedData} />}
                </Await>
            </React.Suspense>
        </PageFrame>
    );
}

function Component({ data }: { data: ResourceViewRow[] }) {
    const table = useTable({
        data,
        columns: resourcesColumns,
    });
    return (
        <>
            <DataTable table={table} rowHeight={50} />

            <Outlet />
        </>
    );
}
