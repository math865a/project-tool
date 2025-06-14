import { NavLink, useLocation } from "react-router-dom";
import { createStyles, getStylesRef } from "@mantine/core";
import React, { useMemo } from "react";
import { TablerIconsProps } from "@tabler/icons-react";

interface Props {
    to: string;
    label: string;
    icon?: React.FC<TablerIconsProps>;
    end?: boolean;
    activeLinks?: string[];
}

export function NavbarLink({ activeLinks, ...item }: Props) {
    const { classes, cx } = useStyles();

    const { pathname } = useLocation();

    const activated = useMemo(() => {
        if (activeLinks) {
            return activeLinks.some((link) => pathname.includes(link));
        }
    }, [pathname, activeLinks]);

    return (
        <NavLink to={item.to} end={item.end}>
            {({ isActive }) => (
                <div
                    className={cx(
                        classes.link,
                        (isActive || activated) && classes.linkActive,
                    )}
                >
                    {item.icon && <item.icon className={classes.linkIcon} />}
                    <span>{item.label}</span>
                </div>
            )}
        </NavLink>
    );
}

const useStyles = createStyles((theme) => ({
    link: {
        ...theme.fn.focusStyles(),
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        fontSize: theme.fontSizes.md,
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[1]
                : theme.colors.gray[8],
        padding: `6px ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,
        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[2],
        },
    },

    linkIcon: {
        ref: getStylesRef("icon"),
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[2]
                : theme.colors.gray[6],
        marginRight: theme.spacing.sm,
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).color,
            fontWeight: 700,
            [`& .${getStylesRef("icon")}`]: {
                color: theme.fn.variant({
                    variant: "light",
                    color: theme.primaryColor,
                }).color,
            },
        },
    },
}));
