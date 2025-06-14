import { HeaderLinkProps, SubLink } from '../header-link.types.ts';
import { createStyles, HoverCard, Stack, UnstyledButton } from '@mantine/core';

import { MegaMenuLink } from './mega-menu.link.tsx';
import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavbarLink } from '@libs/design';

export function HeaderLinkMegaMenu({ url, end, label, icon, subLinks = [] }: HeaderLinkProps) {
    const { classes } = useStyles();

    const { pathname } = useLocation();

    const activeSubLink = useMemo(() => {
        return subLinks.find((subLink) => pathname.includes(subLink.url));
    }, [pathname, subLinks]);

    const [hoveredLink, setHoveredLink] = useState<SubLink | null>(null);

    const onHover = (id: string) => {
        setHoveredLink(subLinks.find((subLink) => subLink.id === id) ?? null);
    };

    const onLeave = () => {
        setHoveredLink(null);
    };

    const subLink = hoveredLink ? hoveredLink : (activeSubLink ?? subLinks[0]);

    return (
        <HoverCard classNames={classes} withinPortal={true}>
            <HoverCard.Target>
                <UnstyledButton>
                    <NavbarLink to={url} label={label} icon={icon} end={end} />
                </UnstyledButton>
            </HoverCard.Target>
            <HoverCard.Dropdown>
                <Stack spacing={0}>
                    {subLinks.map((s) => (
                        <MegaMenuLink key={s.id} onHover={onHover} onLeave={onLeave} {...s} />
                    ))}
                </Stack>
                {/* <Divider orientation={'vertical'} />
                <RecentRecords {...subLink} />*/}
            </HoverCard.Dropdown>
        </HoverCard>
    );
}

const useStyles = createStyles((theme) => ({
    dropdown: {
        //minWidth: rem(350),
        display: 'flex',
        padding: theme.spacing.xs,
        //paddingTop: theme.spacing.lg,
        gap: theme.spacing.sm,
    },
}));
