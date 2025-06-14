import { Row, Table } from "@tanstack/react-table";
import { TableProps } from "@mantine/core";
import React from "react";
import { StoreApi } from "zustand";

export interface BaseRow {
    id: string;
}

export interface DataTableProps<R extends BaseRow = any> {
    headerHeight?: number;
    rowHeight?: number;
    table: Table<R>;
    tableProps?: TableProps;
    actionRow?: React.ReactNode;
    Row?: React.FC<RowProps<R>>;
    onContextMenu?: (
        event: React.MouseEvent<HTMLTableRowElement>,
        row: Row<R>,
    ) => void;
    noRowsOverlay?: React.ReactNode;
}

export interface CreateTableStoreProps<R extends BaseRow = any>
    extends Omit<DataTableProps<R>, "table"> {}

export interface TableStore<R extends BaseRow = any>
    extends CreateTableStoreProps<R> {
    width: number;
    height: number;
    updateDimensions: (width: number, height: number) => void;
    headerHeight: number;
    rowHeight: number;
    hovered: string | null;
    setHovered: (id: string | null) => void;
}

export type TableStoreApi<R extends BaseRow = any> = StoreApi<TableStore<R>>;

export interface ComponentProps<R extends BaseRow = any> {
    table: Table<R>;
}

export interface RowProps<R extends BaseRow = any> {
    row: Row<R>;
    className: string;
    onContextMenu?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
    children?: React.ReactNode;
}
