import { DataTable, useTable } from '@libs/components';
import { Container, Loader, Paper } from '@mantine/core';
import { ResourceViewRow } from '@shared';
import React from 'react';
import { Await, Outlet, useLoaderData } from 'react-router-dom';
import { resourcesColumns } from './columns';
import { resourcesViewLoader } from './loader.ts';

export function ResourcesViewPage() {
    const data = useLoaderData() as ReturnType<typeof resourcesViewLoader>;

    return (
        <Container style={{ flex: 1, display: 'flex' }} size={'xl'}>
            <Paper style={{ flex: 1, display: 'flex' }} p={'md'}>
                <React.Suspense fallback={<Loader />}>
                    <Await resolve={data}>
                        {(resolvedData) => <Component data={resolvedData} />}
                    </Await>
                </React.Suspense>
            </Paper>
        </Container>
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
