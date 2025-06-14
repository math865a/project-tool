import { createStyles, Text } from "@mantine/core";
import { CellContext } from "@tanstack/react-table";

const useStyles = createStyles((theme, ctx: CellContext<any, any>) => {
    let fw: number = 350;
    if (ctx.row.subRows.length > 0) {
        fw = 500;
    }

    return {
        text: {
            fontWeight: fw,
        },
    };
});

export function DefaultCell(context: CellContext<any, any>) {
    const { classes } = useStyles(context);

    return (
        <Text size="xs" className={classes.text}>
            {context.getValue()}
        </Text>
    );
}
