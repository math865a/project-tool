import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { ActionIcon, Group, Text, Tooltip } from '@mantine/core';
import { IconLink, IconPencil, IconTrash } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import React from 'react';
import { ResourceTypeViewRow } from '@shared';
import { Identity } from '@libs/design/data-display';
import { formatDKK } from '@libs/util';
import { LinkWrapper } from '@libs/design';

const { accessor, display } = createColumnHelper<ResourceTypeViewRow>();

export const resourceTypesColumns: ColumnDef<ResourceTypeViewRow, any>[] = [
    display({
        id: 'actions',
        size: 80,
        cell: ({ row }) => (
            <Group>
                <Tooltip label={'Slet'}>
                    <ActionIcon type={'submit'}>
                        <IconTrash size={16} />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label={'Redigér'}>
                    <ActionIcon component={Link} to={`/resourcetypes/edit/${row.original.id}`}>
                        <IconPencil size={16} />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label={'Gå til'}>
                    <ActionIcon component={Link} to={`/resourcetypes/${row.original.id}`}>
                        <IconLink size={16} />
                    </ActionIcon>
                </Tooltip>
            </Group>
        ),
    }),
    accessor('node.name', {
        cell: (props) => (
            <Identity
                size={30}
                name={props.row.original.node.name}
                avatar={{
                    color: props.row.original.node.color,
                    text: props.row.original.node.name[0].toUpperCase(),
                }}
            />
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
    accessor('contract', {
        cell: (props) => (
            <LinkWrapper to={`/contracts/${props.row.original.contract.id}`}>
                <Text>{props.row.original.contract.name}</Text>
            </LinkWrapper>
        ),
        meta: {
            title: 'Kontrakt',
            align: 'center',
        },
    }),
    accessor('node.salesDefault', {
        cell: (props) => <Text>{formatDKK(props.row.original.node.salesDefault)}</Text>,
        meta: {
            title: 'Salgspris',
            align: 'center',
        },
    }),
    accessor('node.salesOvertime', {
        cell: (props) => <Text>{formatDKK(props.row.original.node.salesOvertime)}</Text>,
        meta: {
            title: 'Salgspris (overtid)',
            align: 'center',
        },
    }),
    accessor('resourceCount', {
        cell: (props) => <Text>{props.row.original.resourceCount}</Text>,
        meta: {
            title: 'Antal ressourcer',
            align: 'center',
        },
    }),
];
