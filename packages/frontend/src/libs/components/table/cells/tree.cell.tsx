

import {IconChevronDown, IconChevronUp} from "@tabler/icons-react";

import { createStyles, rem, ActionIcon, Group, Flex } from "@mantine/core";
import { CellContext } from "@tanstack/react-table";
import React, {useMemo} from "react";
const useStyles = createStyles((theme, { depth }: { depth: number }) => ({
    indent: {},
    chevronWrapper: {
        paddingLeft: theme.spacing.xs,

        marginLeft: rem(depth * 20),
        minWidth: 25,
    },
    chevron: {
        color: theme.colors.gray[7],
    },
}));

export function TreeCell({
                             children,
                             ...ctx
                         }: CellContext<any, any> & { children?: React.ReactNode }) {
    const { classes, cx } = useStyles({ depth: ctx.row.depth });

    const isExpanded = ctx.row.getIsExpanded()

    const Icon = useMemo(() => {
        return isExpanded ? IconChevronUp : IconChevronDown
    },[isExpanded])

    return (
        <Flex align="center" ml={rem(ctx.row.depth * 1.5)} gap={4} style={{flex: 1}}>
            <div className={classes.chevronWrapper}>
                {ctx.row.getCanExpand() && (
                    <ActionIcon
                        onClick={() => ctx.row.toggleExpanded()}
                        size="sm"
                        variant="transparent"
                    >
                        <Icon size={16} className={cx(classes.chevron)}/>

                    </ActionIcon>
                )}
            </div>
            {children}
        </Flex>
    );
}
