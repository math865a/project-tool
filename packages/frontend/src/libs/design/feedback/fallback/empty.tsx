import {
    Box,
    BoxProps,
    createStyles,
    MantineNumberSize,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import React from "react";

interface StylesParams {
    maxWidth?: number | string;
}

const useStyles = createStyles((theme, { maxWidth }: StylesParams) => ({
    wrapper: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: maxWidth,
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl,
    },
    description: {
        textAlign: "center",
    },
    actionWrapper: {
        marginTop: theme.spacing.sm,
    },
}));

export interface FallbackEmptyProps extends StylesParams, BoxProps {
    isVisible?: boolean;
    title?: string;
    description?: string;
    actions?: React.ReactNode;
    wrapperClassName?: string;
    titleClassName?: string;
    textClassName?: string;
    gap?: MantineNumberSize;
}

export function Empty({
    title,
    isVisible = true,
    description,
    actions,
    maxWidth = "60%",
    wrapperClassName,
    titleClassName,
    textClassName,
    gap = "md",
    ...boxProps
}: FallbackEmptyProps) {
    const { classes, cx } = useStyles({ maxWidth });

    if (!isVisible) return null;

    return (
        <Box className={cx(classes.wrapper, wrapperClassName)} {...boxProps}>
            <Stack align="center" spacing={gap}>
                <Title className={titleClassName} order={3}>
                    {title}
                </Title>
                <Text
                    className={cx(textClassName, classes.description)}
                    size="md"
                    c="dimmed"
                >
                    {description}
                </Text>
                <div className={classes.actionWrapper}>{actions}</div>
            </Stack>
        </Box>
    );
}
