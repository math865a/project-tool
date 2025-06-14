import { create, StoreApi } from "zustand";
import { immer } from "zustand/middleware/immer";
import { BaseRow, CreateTableStoreProps, TableStore } from "./types.ts";
import { TableRow } from "../components/table.row.tsx";

export function createTableStore<R extends BaseRow = any>(
    props: CreateTableStoreProps<R>,
): StoreApi<any> {
    return create(
        immer<TableStore<R>>((set) => ({
            width: 800,
            height: 1000,
            headerHeight: props.headerHeight ?? 40,
            rowHeight: props.rowHeight ?? 45,
            actionRow: props.actionRow ?? false,
            onContextMenu: props.onContextMenu,
            Row: props.Row ?? TableRow,
            noRowsOverlay: props.noRowsOverlay,
            updateDimensions: (w, h) => {
                set((state) => {
                    state.width = w;
                    state.height = h;
                });
            },
            hovered: null,
            setHovered: (id) => {
                set((state) => {
                    state.hovered = id;
                });
            },
        })),
    );
}
