import { DataTable, useTable } from "@libs/components";
import { Loader } from "@mantine/core";
import { WorkpackageViewRow } from "@shared";
import React from "react";
import { Await, Outlet, useLoaderData } from "react-router-dom";

import { PageFrame } from "@libs/design";
import { workpackagesViewLoader } from "./loader.ts";
import { workpackagesColumns } from "./columns.tsx";

export function WorkpackagesViewPage() {
    const data = useLoaderData() as ReturnType<typeof workpackagesViewLoader>;

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

function Component({ data }: { data: WorkpackageViewRow[] }) {
    const table = useTable({
        data,
        columns: workpackagesColumns,
    });
    return (
        <>
            <DataTable table={table} rowHeight={50} />
            <Outlet />
        </>
    );
}
