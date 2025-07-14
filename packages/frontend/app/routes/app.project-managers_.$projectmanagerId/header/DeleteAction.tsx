import { useLoaderData, useSubmit } from "@remix-run/react";
import { Action as A, Can, Subject } from "~/src";
import { Action, ConfirmationDialog } from "~/src/design-system";
import { IconTrash } from "@tabler/icons-react";
import { ProjectManagerLoader } from "~/routes/app.project-managers_.$projectmanagerId/route";
import { useState } from "react";

export function DeleteAction() {
    const { node } = useLoaderData<ProjectManagerLoader>();

    const submit = useSubmit();

    const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);

    const handleOpen = () => {
        setOpenConfirmation(true);
    };

    const handleClose = () => {
        setOpenConfirmation(false);
    };

    const handleDelete = () => {
        setOpenConfirmation(false);
        submit(
            {},
            {
                method: "delete",
                action: "?/deleteProjectManager",
            }
        );
    };

    return (
        <>
            <Can I={A.Delete} a={Subject.ProjectManagers}>
                <Action.TextButton
                    text="Slet"
                    icon={IconTrash}
                    onClick={handleOpen}
                />
            </Can>
            <ConfirmationDialog
                open={openConfirmation}
                onCancel={handleClose}
                onConfirm={handleDelete}
            />
        </>
    );
}
