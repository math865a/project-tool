import { GridRowId } from "@mui/x-data-grid-pro";

import { Stack } from "@mui/material";
import { Action, Grid } from "~/src/design-system";
import { useRowState } from "../hooks/useRowState";
import { IconPencil, IconTrash } from "@tabler/icons-react";

interface Props
    extends Pick<
        ReturnType<typeof useRowState>,
        "handleDeleteClick" | "handleEditClick" | "isEditing"
    > {
    id: GridRowId;
}

export default function ActionsCell({
    id,
    isEditing,
    handleDeleteClick,
    handleEditClick,
}: Props) {
    const hoverRow = Grid.useViewContext().hoverRow;
    if (!isEditing && hoverRow === id) {
        return (
            <Stack direction="row" alignItems="center" spacing={0.5}>
                <Action.Symbol
                    icon={IconTrash}
                    title="Handlinger"
                    onClick={handleDeleteClick(id)}
                />
                <Action.Symbol
                    icon={IconPencil}
                    title="Rediger"
                    onClick={handleEditClick(id)}
                />
            </Stack>
        );
    }
    return <></>;
}

/*

                 */
