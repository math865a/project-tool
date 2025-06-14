import { HeaderLinkProps } from './header-link.types.ts';

import { createStyles, Menu, rem, UnstyledButton } from '@mantine/core';
import { MenuLink, NavbarLink } from '@libs/design';

export function HeaderLinkMenu({ url, end, label, icon, subLinks = [] }: HeaderLinkProps) {
    const { classes } = useStyles();
    return (
        <Menu withinPortal={true} position={'bottom'} trigger={'hover'} classNames={classes}>
            <Menu.Target>
                <UnstyledButton>
                    <NavbarLink
                        to={url}
                        label={label}
                        icon={icon}
                        end={end}
                        activeLinks={subLinks.map((d) => d.url)}
                    />
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
                {subLinks.map((subLink) => (
                    <MenuLink
                        closeMenuOnClick={true}
                        key={subLink.id}
                        to={subLink.url}
                        icon={subLink.icon && <subLink.icon size={16} />}
                    >
                        {subLink.label}
                    </MenuLink>
                ))}
            </Menu.Dropdown>
        </Menu>
    );
}

const useStyles = createStyles((theme) => ({
    dropdown: {
        minWidth: rem(175),
    },
}));
