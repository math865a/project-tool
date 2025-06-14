import { Row } from '@tanstack/react-table';
import { ResourceViewRow } from '@shared';
import { useFetcher } from 'react-router-dom';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import React from 'react';

export interface DeleteResourceActionProps {
    row: Row<ResourceViewRow>;
}

export function DeleteResourceAction({ row }: DeleteResourceActionProps) {
    const fetcher = useFetcher();

    const handleDelete = () => {
        fetcher.submit(
            {},
            {
                action: '/api/resources/delete/' + row.original.id,
                method: 'delete',
            },
        );
    };

    return (
        <Tooltip label={'Slet'}>
            <ActionIcon type={'submit'} onClick={handleDelete}>
                <IconTrash size={16} />
            </ActionIcon>
        </Tooltip>
    );
}
