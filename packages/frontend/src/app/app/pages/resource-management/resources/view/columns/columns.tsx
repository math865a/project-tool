import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { ActionIcon, Group, Text, Tooltip } from '@mantine/core';
import { IconLink, IconPencil } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import React from 'react';
import { ResourceViewRow } from '@shared';
import { Identity, Tags } from '@libs/design/data-display';
import { formatDKK } from '@libs/util';
import { DeleteResourceAction } from './delete-resource.action.tsx';

const { accessor, display } = createColumnHelper<ResourceViewRow>();

export const resourcesColumns: ColumnDef<ResourceViewRow, any>[] = [
    display({
        id: 'actions',
        size: 80,
        cell: ({ row }) => (
            <Group>
                <DeleteResourceAction row={row} />
                <Tooltip label={'Redigér'}>
                    <ActionIcon component={Link} to={`/resources/edit/${row.original.id}`}>
                        <IconPencil size={16} />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label={'Gå til'}>
                    <ActionIcon component={Link} to={`/resources/${row.original.id}`}>
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
    accessor('node.initials', {
        cell: (props) => <Text>{props.row.original.node.initials}</Text>,
        meta: {
            title: 'Initialer',
            align: 'center',
        },
    }),
    accessor('node.costDefault', {
        cell: (props) => <Text>{formatDKK(props.row.original.node.costDefault)}</Text>,
        meta: {
            title: 'Kostpris',
            align: 'center',
        },
    }),
    accessor('node.costOvertime', {
        cell: (props) => <Text>{formatDKK(props.row.original.node.costOvertime)}</Text>,
        meta: {
            title: 'Kostpris (overtid)',
            align: 'center',
        },
    }),
    accessor('resourceTypes', {
        cell: (props) => (
            <Tags
                px={'4px'}
                noWrap={true}
                tags={props.row.original.resourceTypes.map((d) => ({
                    value: d.id,
                    label: d.name,
                    color: d.color,
                }))}
            />
        ),
        meta: {
            title: 'Ressourcetyper',
            align: 'center',
        },
    }),
    /*accessor('departments', {
        cell: (props) => (
            <Tags
                px={'4px'}
                noWrap={true}
                tags={props.row.original.departments.map((d) => ({
                    ...d,
                    value: d.id,
                }))}
            />
        ),
        meta: {
            title: 'Departments',
        },
    }),
    accessor('tags', {
        cell: (props) => <Tags px={'4px'} tags={props.row.original.tags} noWrap={true} />,
        meta: {
            title: 'Tags',
        },
    }),
    accessor('skills', {
        cell: (props) => <Tags px={'4px'} tags={props.row.original.skills} noWrap={true} />,
        meta: {
            title: 'Skills',
        },
    }),*/
];
