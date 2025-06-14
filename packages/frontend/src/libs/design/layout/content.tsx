import {
    Box,
    createStyles,
    Flex,
    Group,
    MantineNumberSize,
    Paper,
    ScrollArea,
    Title,
    useMantineTheme,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import React from "react";

interface ContentStylesParams {
    size?: MantineNumberSize;
}

const useStyles = createStyles((theme, { size }: ContentStylesParams) => {
    const getSize = () => {
        if (!size) {
            return "100%";
        } else if (typeof size === "string") {
            return theme.breakpoints[size];
        }
        return size;
    };

    const getMargin = () => {
        if (size) {
            return "auto";
        }
        return 0;
    };

    const width = getSize();
    const margin = getMargin();

    return {
        container: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            marginLeft: margin,
            marginRight: margin,
            width: width,
            maxWidth: width,
            gap: theme.spacing.lg,
            position: "relative",
        },
    };
});

interface WrapperProps extends Omit<ContentStylesParams, "height"> {
    children?: React.ReactNode;
}

export function Wrapper({ size, children }: WrapperProps) {
    const { classes } = useStyles({ size: size });

    return <div className={classes.container}>{children}</div>;
}

export type ContentProps = WrapperProps &
    ContentHeaderProps & {
        transparent?: boolean;
    };

export function ScrollContent({
    children,
    p = "xl",
    size,
    transparent = false,
    ...headerProps
}: ContentProps) {
    const { ref, width, height } = useElementSize();

    return (
        <Wrapper size={size}>
            <Paper
                style={{
                    backgroundColor: transparent ? "transparent" : undefined,
                    flex: 1,
                    maxWidth: "100%",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                }}
                py={p}
            >
                <Header {...headerProps} p={p} />

                <Box style={{ flex: 1, overflow: "hidden" }} mt="sm" ref={ref}>
                    <ScrollArea h={height} offsetScrollbars px={p}>
                        {children}
                    </ScrollArea>
                </Box>
            </Paper>
        </Wrapper>
    );
}

export function Scrollable({ children, p = "xl" }: PaperContentProps) {
    const { ref, width, height } = useElementSize();
    return (
        <Box style={{ flex: 1, overflow: "hidden" }} ref={ref}>
            <ScrollArea h={height} offsetScrollbars p={p}>
                {children}
            </ScrollArea>
        </Box>
    );
}

export interface PaperContentProps {
    p?: MantineNumberSize;
    children?: React.ReactNode;
    className?: string;
}

export function PaperContent({
    p = "xl",
    children,
    className,
}: PaperContentProps) {
    const theme = useMantineTheme();
    return (
        <Paper
            className={className}
            style={{
                flex: 1,
                maxWidth: "100%",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                minHeight: 800,
                borderRadius: 0,
                borderStartStartRadius: theme.radius.md,
            }}
            shadow={"xs"}
            withBorder={false}
            py={p}
        >
            {children}
        </Paper>
    );
}

export function Content({
    children,
    p = "xl",
    size,
    transparent = false,
    ...headerProps
}: ContentProps) {
    return (
        <Wrapper size={size}>
            <Paper
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "100%",
                    overflow: "hidden",
                    backgroundColor: transparent ? "transparent" : undefined,
                }}
                p={p}
                withBorder
            >
                <Header {...headerProps} p={p} />
                <Box
                    style={{ flex: 1, display: "flex", overflow: "hidden" }}
                    px={p}
                >
                    {children}
                </Box>
            </Paper>
        </Wrapper>
    );
}

export interface ContentHeaderProps {
    icon?: React.ReactNode;
    title?: string;
    actions?: React.ReactNode;
    actionSpacing?: MantineNumberSize;
    p?: MantineNumberSize;
}

const useHeaderStyles = createStyles((theme) => ({
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    icon: {
        fontSize: "1.2rem",
        color: theme.colors.gray[9],
    },
}));

export function Header({
    icon,
    title,
    actions,
    actionSpacing = "sm",
    p,
}: ContentHeaderProps) {
    const { classes, cx } = useHeaderStyles();

    if (!title && !actions) return null;

    return (
        <Box className={classes.wrapper} px={p}>
            <Group align="center" spacing="sm">
                {icon}
                <Title order={3}>{title}</Title>
            </Group>
            <Flex gap={actionSpacing} align="center">
                {actions}
            </Flex>
        </Box>
    );
}
