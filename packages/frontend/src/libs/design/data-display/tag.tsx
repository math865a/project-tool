import {
    Badge,
    BadgeProps,
    createStyles,
    Group,
    GroupProps,
    rem,
    Tooltip,
    TooltipProps,
} from '@mantine/core';
import React from 'react';
import { Option } from '@shared';

export interface TagProps extends Omit<BadgeProps, 'color'> {
    clickable?: boolean;
    color?: string;
    tooltip?: string;
    icon?: React.ReactNode;
    tooltipProps?: Omit<TooltipProps, 'label'>;
    children?: React.ReactNode;
}

const useStyles = createStyles(
    (theme, { color, clickable }: Partial<Pick<TagProps, 'color' | 'clickable'>>) => ({
        root: {
            height: '1.45rem',
            marginTop: rem(2),
            borderRadius: theme.radius.sm,
            backgroundColor: !color
                ? 'transparent'
                : theme.fn.rgba(color ?? theme.colors.blue[6], 0.25),
            color: !color ? undefined : theme.fn.darken(color ?? theme.colors.blue[6], 0.3),
            cursor: 'default',
            fontSize: theme.spacing.xs,
            '&:hover': clickable
                ? {
                      backgroundColor: theme.fn.rgba(color ?? theme.colors.blue[6], 0.15),
                      cursor: 'pointer',
                  }
                : {},
        },
        inner: {
            textTransform: 'initial',
            fontSize: '0.75rem',
            fontWeight: 500,
        },
    }),
);

export function Tag({ children, clickable, color, tooltip, tooltipProps, ...tagProps }: TagProps) {
    const { classes } = useStyles({ color: color, clickable });

    return (
        <Tooltip
            position="top"
            withArrow
            label={tooltip ?? ''}
            disabled={tooltip === undefined}
            {...tooltipProps}
        >
            <Badge
                classNames={{ root: classes.root, inner: classes.inner }}
                variant={'light'}
                {...tagProps}
            >
                {children}
            </Badge>
        </Tooltip>
    );
}

interface TagsProps extends TagProps {
    tags: Option[];
    noWrap?: boolean;
    grow?: boolean;
    align?: GroupProps['align'];
    spacing?: GroupProps['spacing'];
    position?: GroupProps['position'];
    px?: GroupProps['px'];
    py?: GroupProps['py'];
    p?: GroupProps['p'];
}

export function Tags({
    tags,
    noWrap,
    grow,
    align,
    spacing = '6px',
    position,
    px,
    py,
    p,
    ...props
}: TagsProps) {
    return (
        <Group
            p={p}
            px={px}
            py={py}
            align={align}
            spacing={align}
            grow={grow}
            position={position}
            noWrap={noWrap}
        >
            {tags.map((tag: Option) => (
                <Tag {...props} color={tag.color} key={tag.value}>
                    {tag.label}
                </Tag>
            ))}
        </Group>
    );
}
