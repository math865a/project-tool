import { BaseRow, TableStore } from "./types.ts";
import { useContext } from "react";
import { useStore } from "zustand";
import { TableContext } from "./table.context.ts";

export const useDataTable = <T extends BaseRow = any, S = any>(
    selector: (state: TableStore<T>) => S,
): S => {
    const ctx = useContext(TableContext);
    if (ctx === undefined) {
        throw new Error("useDataTable must be used within a DataTableProvider");
    }
    return useStore(ctx, selector) as S;
};
