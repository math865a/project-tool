import { BaseRow, ComponentProps, useDataTable } from "../state";
import { createStyles } from "@mantine/core";
import { useCellStyles } from "./styles";
import { InnerCell } from "./inner-cell";
import { flexRender } from "@tanstack/react-table";

export function TableHead<R extends BaseRow>({ table }: ComponentProps) {
    const headerHeight = useDataTable((state) => state.headerHeight);

    const { classes, cx } = useStyles({ headerHeight });
    const { classes: cellClasses } = useCellStyles();
    return (
        <thead className={classes.head}>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <th
                            colSpan={header.colSpan}
                            className={cx(
                                cellClasses.cell,
                                cellClasses.headerCell,
                            )}
                            key={header.id}
                            style={{
                                width: header.getSize(),
                                height: headerHeight,
                                maxWidth: header.getSize(),
                                borderColor: "transparent",
                            }}
                        >
                            <InnerCell def={header.column.columnDef} isHeader>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext(),
                                      )}
                            </InnerCell>
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
    );
}

const useStyles = createStyles(
    (theme, { headerHeight }: { headerHeight: number }) => ({
        head: {
            borderBottom:
                headerHeight === 0
                    ? "1px solid transparent"
                    : "1px solid " + theme.colors.gray[4],
            position: "sticky",
            top: 0,
            //backgroundColor: theme.white,
            zIndex: 20,
        },
    }),
);
