import { createStyles, NavLink as Item } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { SubLink } from '../header-link.types.ts';
import React from 'react';

interface SubLinkItemProps extends SubLink {
    left?: React.ReactNode;
    variant?: 's' | 'm';
    onHover?: (id: string) => void;
    onLeave?: () => void;
    active?: boolean;
}

export function MegaMenuLink({
    url,
    end,
    label,
    id,
    left,
    variant = 'm',
    active,
    onHover,
    onLeave,
    ...props
}: SubLinkItemProps) {
    const { classes } = useStyles({ variant });

    return (
        <NavLink to={url} end={end}>
            {({ isActive }) => (
                <Item
                    onMouseEnter={() => (onHover ? onHover(id) : undefined)}
                    onMouseOut={onLeave}
                    icon={props.icon ? <props.icon size={16} /> : left ? left : null}
                    active={isActive || active}
                    w={250}
                    label={label}
                    fw={isActive ? 700 : undefined}
                    className={classes.item}
                />
            )}
        </NavLink>
    );
}

const useStyles = createStyles((theme, { variant }: { variant: 's' | 'm' }) => ({
    item: {
        borderRadius: theme.radius.sm,
        paddingTop: variant === 'm' ? '0.4rem' : '0.3rem',
        paddingBottom: variant === 'm' ? '0.4rem' : '0.3rem',
    },
}));
