import {
    Box,
    createStyles,
    DefaultProps,
    Group,
    Paper,
    rem,
    Selectors,
    Text,
} from "@mantine/core";

import { forwardRef } from "react";

export interface SectionStylesParams {
    contentHeight?: number;
    grow?: boolean;
    whiteTitle?: boolean;
    disablePadding?: boolean;
}

type SectionStylesNames = Selectors<typeof useStyles>;

interface SectionProps
    extends DefaultProps<SectionStylesNames, SectionStylesParams> {
    title?: string | React.ReactNode;
    startAction?: React.ReactNode;
    contentHeight?: number;
    children?: React.ReactNode;
    hideStartAction?: boolean;
    grow?: boolean;
    whiteTitle?: boolean;
    actions?: React.ReactNode;
    hideActions?: boolean;
}

const useStyles = createStyles(
    (
        theme,
        { contentHeight, grow, whiteTitle, disablePadding }: SectionStylesParams
    ) => ({
        root: {
            flex: grow ? 1 : undefined,
            position: "relative",
        },
        titleWrapper: {
            maxHeight: rem(30),
            minHeight: rem(30),
            paddingBottom: rem(12),
        },
        title: {
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "0.8rem",
            color: whiteTitle ? theme.white : undefined,
        },
        content: {
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            paddingLeft: disablePadding ? 0 : rem(10),
            paddingRight: disablePadding ? 0 : rem(10),
            height: contentHeight,
        },
        actions: {
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
        },
    })
);

export const Section = forwardRef<HTMLDivElement, SectionProps>(
    (
        {
            title,
            startAction,
            classNames,
            styles,
            unstyled,
            className,
            contentHeight,
            hideStartAction,
            children,
            grow,
            whiteTitle,
            actions,
            hideActions = false,
            ...others
        },
        ref
    ) => {
        const { classes, cx } = useStyles(
            { contentHeight, grow, whiteTitle, disablePadding: others.p === 0 },
            { name: "Section", classNames, styles, unstyled }
        );
        return (
            <Paper
                ref={ref}
                withBorder
                p="md"
                radius="md"
                component={Box}
                {...others}
                className={cx(className, classes.root)}
            >
                {!title && !startAction ? null : (
                    <Group position="apart" className={classes.titleWrapper}>
                        {typeof title === "string" ? (
                            <Text size="sm" className={classes.title}>
                                {title}
                            </Text>
                        ) : (
                            title
                        )}
                        <Box>
                            <>{!hideStartAction && startAction}</>
                        </Box>
                    </Group>
                )}
                <Box className={classes.content} mt={"4px"}>{children}</Box>
                {actions && !hideActions && (
                    <div className={classes.actions}>{actions}</div>
                )}
            </Paper>
        );
    }
);
