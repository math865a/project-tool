import { createStyles, getStylesRef, Menu, MenuItemProps, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';

export interface MenuLinkProps extends MenuItemProps {
    to: string;
    end?: boolean;
}

export function MenuLink({ to, children, end, ...props }: MenuLinkProps) {
    const { classes } = useStyles();

    return (
        <NavLink to={to} end={end}>
            {({ isActive }) => (
                <Menu.Item {...props} className={isActive ? classes.linkActive : undefined}>
                    <Text className={isActive ? classes.labelActive : undefined}>{children}</Text>
                </Menu.Item>
            )}
        </NavLink>
    );
}

const useStyles = createStyles((theme) => ({
    labelActive: {
        color: theme.colors.blue[6],
        fontWeight: 700,
    },
    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({
                variant: 'light',
                color: theme.colors.blue[5],
            }).background,
            color: theme.fn.variant({
                variant: 'light',
                color: theme.primaryColor,
            }).color,

            [`& .${getStylesRef('icon')}`]: {
                color: theme.fn.variant({
                    variant: 'light',
                    color: theme.primaryColor,
                }).color,
            },
        },
    },
}));
