import {createStyles} from "@mantine/core";

export const useCellStyles = createStyles((theme) => ({
    headerCell: {
        borderBottom: "1px solid transparent",
    },
    cell: {
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
    },
    cellContent: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
    },
    footerCell: {
        // backgroundColor: theme.colors.gray[0],
        borderBottom: "none",
        height: 40,
    },
    footerContent: {
        justifyContent: "center",
    },
}));