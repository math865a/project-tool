import { DataTable, useTable } from "@libs/components";
import { Loader } from "@mantine/core";
import { ContractViewRow } from "@shared";
import React from "react";
import { Await, Outlet, useLoaderData } from "react-router-dom";
import { financialSourcesColumns } from "./columns.tsx";
import { financialSourcesViewLoader } from "./loader.ts";
import { PageFrame } from "@libs/design";

export function FinancialSourcesViewPage() {
    const data = useLoaderData() as ReturnType<
        typeof financialSourcesViewLoader
    >;

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
        columns: financialSourcesColumns,
    });
    return (
        <>
            <DataTable table={table} rowHeight={50} />
            <Outlet />
        </>
    );
}
