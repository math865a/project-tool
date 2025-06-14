import { Button, ButtonProps } from "@mantine/core";
import { Link, LinkProps } from "react-router-dom";

export function LinkButton({
                               children,
                               ...props
                           }: Omit<ButtonProps, "onClick"> & LinkProps) {
    return (
        <Button {...props} component={Link}>
            {children}
        </Button>
    );
}
