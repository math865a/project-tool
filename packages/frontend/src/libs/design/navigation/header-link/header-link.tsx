import { HeaderLinkProps } from './header-link.types.ts';
import { NavbarLink } from '@libs/design';
import { HeaderLinkMegaMenu } from './mega-menu';

export function HeaderLink(props: HeaderLinkProps) {
    if (props.subLinks) {
        return <HeaderLinkMegaMenu {...props} />;
    }

    return <NavbarLink to={props.url} label={props.label} icon={props.icon} end={props.end} />;
}
