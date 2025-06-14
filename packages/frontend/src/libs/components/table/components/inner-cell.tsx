import React from "react";
import { DefaultColMeta, getMeta } from "../config";
import { ColumnDef } from "@tanstack/react-table";
import { createStyles } from "@mantine/core";

interface StylesParams {
    meta: DefaultColMeta;
    isHeader: boolean;
}

const useStyles = createStyles((theme, { meta, isHeader }: StylesParams) => {
    const getInteractiveStyles = () => {
        if (meta.interactive && !isHeader) {
            return {
                "&:hover": {
                    border: "1px solid " + theme.colors.gray[4],
                },
                "&:focus-within": {
                    border: "1px solid " + theme.colors.blue[4],
                },
            };
        }
        return {};
    };

    return {
        wrapper: {
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            paddingLeft: 4,
            paddingRight: 4,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: isHeader ? meta.headerAlign : meta.align,
            ...getInteractiveStyles(),
        },
    };
});

export const InnerCell = React.forwardRef<
    HTMLDivElement,
    { def: ColumnDef<any>; children?: React.ReactNode; isHeader?: boolean }
>(({ children, def, isHeader = false }, ref) => {
    const { classes } = useStyles({ meta: getMeta(def), isHeader });

    return (
        <div ref={ref} className={classes.wrapper}>
            {children}
        </div>
    );
});
