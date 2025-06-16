import { DataTable, useTable } from "@libs/components";
import { Loader } from "@mantine/core";
import { ContractViewRow } from "@shared";
import React from "react";
import { Await, Outlet, useLoaderData } from "react-router-dom";
import { contractsColumns } from "./columns.tsx";
import { contractsViewLoader } from "./loader.ts";
import { PageFrame } from "@libs/design";

export function ContractsViewPage() {
    const data = useLoaderData() as ReturnType<typeof contractsViewLoader>;

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

function Component({ data }: { data: ContractViewRow[] }) {
    const table = useTable({
        data,
        columns: contractsColumns,
    });
    return (
        <>
            <DataTable table={table} rowHeight={50} />

            <Outlet />
        </>
    );
}
