import { TableOptions, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import {defaultColumn} from "./components/default-column";


type Options<T> = Omit<TableOptions<T>, "getCoreRowModel"> & {
    getCoreRowModel?: TableOptions<T>["getCoreRowModel"];
}

export const useTable = <T extends any>(tableOptions: Options<T>) => {


   const table = useReactTable<T>({
        getCoreRowModel: tableOptions.getCoreRowModel || getCoreRowModel(),
        defaultColumn: defaultColumn,
        ...tableOptions,
    })

    return table;



}