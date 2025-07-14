import { Stack } from "@mui/material";
import { Page } from "design";
import { DeleteAction } from "./header";

export default function HeaderSection() {
    return (
        <Page.Header
            actions={
                <Stack direction="row" spacing={2} alignItems="center">
                    <DeleteAction />
                </Stack>
            }
        />
    );
}
