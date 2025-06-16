import { HeaderLinkProps } from "./header-link.types.ts";
import { NavbarLink } from "@libs/design";
import { HeaderLinkMenu } from "./header-link.menu.tsx";

export function HeaderLink(props: HeaderLinkProps) {
    if (props.subLinks) {
        return <HeaderLinkMenu {...props} />;
    }

    return (
        <NavbarLink
            to={props.url}
            label={props.label}
            icon={props.icon}
            end={props.end}
        />
    );
}
