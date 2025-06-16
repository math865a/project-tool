import {ColumnDef, createColumnHelper} from '@tanstack/react-table';
import {ActionIcon, Group, Text, Tooltip} from '@mantine/core';
import {IconLink, IconPencil, IconTrash} from '@tabler/icons-react';
import {Link} from 'react-router-dom';
import React from 'react';
import {ContractViewRow} from '@shared';


const {accessor, display} = createColumnHelper<ContractViewRow>();

export const contractsColumns: ColumnDef<ContractViewRow, any>[] = [
	display({
		id: 'actions',
		size: 80,
		cell: ({row}) => (
			<Group>
				<Tooltip label={'Slet'}>
					<ActionIcon type={'submit'}>
						<IconTrash size={16}/>
					</ActionIcon>
				</Tooltip>
				<Tooltip label={'Redigér'}>
					<ActionIcon component={Link} to={`/contracts/edit/${row.original.id}`}>
						<IconPencil size={16}/>
					</ActionIcon>
				</Tooltip>
				<Tooltip label={'Gå til'}>
					<ActionIcon component={Link} to={`/contracts/${row.original.id}`}>
						<IconLink size={16}/>
					</ActionIcon>
				</Tooltip>
			</Group>
		),
	}),
	accessor('node.name', {
		cell: (props) => (
			<Text>
				{props.row.original.node.name}
			</Text>
		),
		meta: {
			title: 'Navn',
		},
	}),
	accessor('node.abbrevation', {
		cell: (props) => <Text>{props.row.original.node.abbrevation}</Text>,
		meta: {
			title: 'Forkortelse',
			align: 'center',
		},
	}),

	accessor('resourceTypeCount', {
		cell: (props) => <Text>{props.row.original.resourceTypeCount}</Text>,
		meta: {
			title: 'Antal ressourcetyper',
			align: 'center',
		},
	}),

	accessor('workpackageCount', {
		cell: (props) => <Text>{props.row.original.workpackageCount}</Text>,
		meta: {
			title: 'Antal arbejdspakker',
			align: 'center',
		},
	}),
];
