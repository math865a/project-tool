import { BaseRow, DataTableProps, TableProvider } from "./state";
import { TableComponent } from "./components/table";
import { Table } from "@tanstack/react-table";

export function DataTableProvider<R extends BaseRow = any>({
    children,
    ...props
}: DataTableProps<R> & { children?: React.ReactNode }) {
    return <TableProvider {...props}>{children}</TableProvider>;
}

export function DataTableComponent<R extends BaseRow = any>({
    table,
}: {
    table: Table<R>;
}) {
    return <TableComponent table={table} />;
}

export function DataTable<R extends BaseRow = any>(props: DataTableProps<R>) {
    return (
        <TableProvider {...props}>
            <TableComponent table={props.table} />
        </TableProvider>
    );
}
