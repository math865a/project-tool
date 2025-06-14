import { useElementSize } from '@mantine/hooks';
import { ComponentProps, useDataTable } from '../state';

import { ScrollArea, Table as MantineTable } from '@mantine/core';
import { TableHead } from './table.head.tsx';
import { TableBody } from './table.body.tsx';
import { EmptyFallback } from './empty-fallback.tsx';
import { useEffect } from 'react';

export function TableComponent<R extends any = any>({ table }: ComponentProps) {
    const updateDimensions = useDataTable((state) => state.updateDimensions);
    const { ref, width, height } = useElementSize();

    useEffect(() => {
        updateDimensions(width, height);
    }, [width, height]);

    const tableProps = useDataTable((state) => state.tableProps);

    return (
        <div
            ref={ref}
            style={{
                flex: 1,
                overflow: 'hidden',
                maxHeight: '100%',
            }}
        >
            <ScrollArea type="hover" style={{ zIndex: 30, flexGrow: 1 }} h={height}>
                <MantineTable
                    horizontalSpacing={0}
                    verticalSpacing={0}
                    style={{
                        minWidth: '100%',
                        maxWidth: '100%', //table.getCenterTotalSize(), //disableVerticalOverflow ? "100%" : table.getCenterTotalSize(),
                        width: table.getCenterTotalSize(),
                    }}
                    {...tableProps}
                >
                    <TableHead table={table} />
                    <TableBody table={table} />
                    <EmptyFallback table={table} />
                </MantineTable>
            </ScrollArea>
        </div>
    );
}
