import { BaseRow, ComponentProps, useDataTable } from "../state";
import { createStyles } from "@mantine/core";
import { ActionRow } from "./action-row";
import { TableRow } from "./table.row.tsx";

const useStyles = createStyles(
    (theme, { hasHandler = false }: { hasHandler?: boolean }) => ({
        row: {
            zIndex: 10,
            cursor: hasHandler ? "pointer" : undefined,
            // borderBottom: headerHeight === 0 ? "none" : undefined,
        },
    }),
);

export function TableBody<R extends BaseRow>({ table }: ComponentProps) {
    const { classes } = useStyles({});
    const Row = useDataTable((s) => s.Row) ?? TableRow;
    const onContextMenu = useDataTable((s) => s.onContextMenu);

    return (
        <tbody style={{ zIndex: 10 }}>
            {table.getRowModel().rows.map((row) => (
                <Row
                    row={row}
                    key={row.original.id}
                    className={classes.row}
                    onContextMenu={(event) =>
                        onContextMenu ? onContextMenu(event, row) : null
                    }

                    /*onMouseOver={() => setHoveredRow(row)}
                     onMouseLeave={() => setHoveredRow(null)}
                     onClick={() => handleRowClick(row)}
                     onContextMenu={
                         onRowContextMenu
                             ? (e) =>
                                 onRowContextMenu(e, row)
                             : undefined
                     }*/
                />
            ))}
            <ActionRow table={table} />
        </tbody>
    );
}
