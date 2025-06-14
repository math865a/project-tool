import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    root: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        overflow: "hidden",
    },
}));

interface PageProps {
    children?: React.ReactNode;
}

export function Page({ children }: PageProps) {
    const { classes } = useStyles();

    return <div className={classes.root}>{children}</div>;
}
