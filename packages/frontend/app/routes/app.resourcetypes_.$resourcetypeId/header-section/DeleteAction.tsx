import { useLoaderData, useSubmit } from "@remix-run/react";
import { Action, ConfirmationDialog } from "design";
import { useState } from "react";
import { Can } from "~/src/session-user";
import { Action as A, Subject } from "~/src/_definitions";
import { IconTrash } from "@tabler/icons-react";
import { ResourceTypeLoader } from "~/routes/app.resourcetypes_.$resourcetypeId/route";

export function ResourceTypeDeleteAction() {
    const submit = useSubmit();

    const { node } = useLoaderData<ResourceTypeLoader>();

    const [open, setOpen] = useState<boolean>(false);

    const handleDelete = () => {
        setOpen(false);
        submit({}, { method: "delete", replace: true });
        /*submit(
            {},
            {
                action: `/app/workpackages/${workpackageId}`,
                method: 'delete',
                replace: true,
            }
        );*/
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <Can I={A.Delete} a={Subject.ResourceTypes} passThrough>
                {(allowed) => (
                    <Action.TextButton
                        text="Slet"
                        icon={IconTrash}
                        onClick={handleOpen}
                    />
                )}
            </Can>
            <ConfirmationDialog
                title={`Er du sikker på, at du vil slette ressourcetypen ${node.name}?`}
                text={`Ressourcetypen vil blive fjernet fra alle abejdspakker, herunder allokeringer og bookinger. Dette kan ikke fortrydes.`}
                open={open}
                onCancel={handleCancel}
                onConfirm={handleDelete}
            />
        </>
    );
}
