import React, { useRef } from 'react';
import { createTableStore } from './table.store';
import { TableContext } from './table.context.ts';
import { BaseRow, DataTableProps, TableStoreApi } from './types.ts';

interface TableProviderProps<R extends BaseRow = any> extends DataTableProps<R> {
    children: React.ReactNode;
}

export function TableProvider<R extends BaseRow = any>({
    children,
    ...props
}: TableProviderProps<R>) {
    const storeRef = useRef<TableStoreApi>(createTableStore<R>({ ...props }));

    return <TableContext.Provider value={storeRef.current}>{children}</TableContext.Provider>;
}
