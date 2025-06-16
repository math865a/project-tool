import { DataTable, useTable } from "@libs/components";
import { Loader } from "@mantine/core";
import { ResourceTypeViewRow } from "@shared";
import React from "react";
import { Await, Outlet, useLoaderData } from "react-router-dom";
import { resourceTypesColumns } from "./columns.tsx";
import { resourceTypesViewLoader } from "./loader.ts";
import { PageFrame } from "@libs/design";

export function ResourceTypesViewPage() {
    const data = useLoaderData() as ReturnType<typeof resourceTypesViewLoader>;

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

function Component({ data }: { data: ResourceTypeViewRow[] }) {
    const table = useTable({
        data,
        columns: resourceTypesColumns,
    });
    return (
        <>
            <DataTable table={table} rowHeight={50} />

            <Outlet />
        </>
    );
}
