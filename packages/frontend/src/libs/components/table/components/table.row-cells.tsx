import { BaseRow, useDataTable } from "../state";
import { useCellStyles } from "./styles";
import { flexRender, Row } from "@tanstack/react-table";
import { InnerCell } from "./inner-cell";

export const RowCells = <T extends BaseRow = any>({
    children,
    ...row
}: Row<T> & { children?: React.ReactNode }) => {
    const rowHeight = useDataTable((s) => s.rowHeight);
    const { classes, cx } = useCellStyles();

    return (
        <>
            {row.getVisibleCells().map((cell) => (
                <td
                    className={classes.cell}
                    key={cell.id}
                    style={{
                        width: cell.column.getSize(),
                        height: rowHeight,
                        maxWidth: cell.column.getSize(),
                    }}
                >
                    <InnerCell def={cell.column.columnDef}>
                        {children}
                        {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                        )}
                    </InnerCell>
                </td>
            ))}
        </>
    );
};
