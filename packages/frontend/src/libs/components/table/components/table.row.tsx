import { RowCells } from "./table.row-cells";
import { BaseRow, RowProps, useDataTable } from "../state";

export function TableRow<R extends BaseRow>({ row, ...props }: RowProps<R>) {
    const setHovered = useDataTable((s) => s.setHovered);

    return (
        <tr
            {...props}
            onMouseOver={() => setHovered(row.original.id)}
            onMouseLeave={() => setHovered(null)}
        >
            <RowCells {...row} />
        </tr>
    );
}
