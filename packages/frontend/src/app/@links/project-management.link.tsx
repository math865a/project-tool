import { IconBusinessplan, IconFolder } from "@tabler/icons-react";
import { HeaderLink } from "@libs/design";

export function ProjectManagementLink() {
    return (
        <HeaderLink
            url={"workpackages"}
            label={"Projektstyring"}
            subLinks={[
                {
                    id: "workpackages",
                    url: "workpackages",
                    label: "Arbejdspakker",
                    icon: IconFolder,
                },
                {
                    id: "project-managers",
                    url: "project-managers",
                    label: "Projektledere",
                    icon: IconBusinessplan,
                },
            ]}
        />
    );
}
