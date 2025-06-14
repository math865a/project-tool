import { Text } from "@mantine/core";
import { ColumnDef, HeaderContext } from "@tanstack/react-table";

import { useMemo } from "react";
import {getMeta} from "../config";
import {DefaultCell} from "./default-cell";

export const defaultColumn: Partial<ColumnDef<any, unknown>> = {
    size: 125,
    header: (props) => <DefaultHeaderCell {...props} />,
    cell: (props) => <DefaultCell {...props} />,
};

export function DefaultHeaderCell(header: HeaderContext<any, unknown>) {
    const meta = getMeta(header)

    const isSortable = useMemo(() => {
        return header.column.getCanSort()
    },[header])

    return (
        <>
            <Text
                size="xs"
                fw={500}
              
            >
                {getMeta(header.column.columnDef).title}
            </Text>


        </>
    );
}
