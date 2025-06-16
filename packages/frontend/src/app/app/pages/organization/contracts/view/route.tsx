import {DataTable, useTable} from '@libs/components';
import {Container, Loader, Paper} from '@mantine/core';
import {ContractViewRow} from '@shared';
import React from 'react';
import {Await, Outlet, useLoaderData} from 'react-router-dom';
import {contractsColumns} from './columns.tsx';
import {contractsViewLoader} from './loader.ts';

export function ContractsViewPage() {
	const data = useLoaderData() as ReturnType<typeof contractsViewLoader>;

	return (
		<Container style={{flex: 1, display: 'flex'}} size={'xl'}>
			<Paper style={{flex: 1, display: 'flex'}} p={'md'}>
				<React.Suspense fallback={<Loader/>}>
					<Await resolve={data}>
						{(resolvedData) => <Component data={resolvedData}/>}
					</Await>
				</React.Suspense>
			</Paper>
		</Container>
	);
}

function Component({data}: { data: ContractViewRow[] }) {
	const table = useTable({
		data,
		columns: contractsColumns,
	});
	return (
		<>
			<DataTable table={table} rowHeight={50}/>

			<Outlet/>
		</>
	);
}
