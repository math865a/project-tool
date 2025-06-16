import { useHandle } from "@libs/design";
import { Container, Paper } from "@mantine/core";
import { Children } from "@libs/types";

export interface PageFrameProps extends Children {}

export function PageFrame({ children }: PageFrameProps) {
    const pageSize = useHandle("pageSize");

    return (
        <Container style={{ flex: 1, display: "flex" }} size={pageSize ?? "xl"}>
            <Paper style={{ flex: 1, display: "flex" }} p={"md"}>
                {children}
            </Paper>
        </Container>
    );
}
