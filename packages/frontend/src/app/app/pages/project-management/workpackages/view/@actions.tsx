import { IconPlus } from "@tabler/icons-react";
import { LinkButton } from "@libs/design";

export function WorkpackagesViewRightAction() {
    return (
        <LinkButton to={"/workpackages/add"} leftIcon={<IconPlus size={18} />}>
            Tilføj arbejdspakke
        </LinkButton>
    );
}
