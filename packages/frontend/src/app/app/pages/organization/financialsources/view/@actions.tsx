import { IconPlus } from "@tabler/icons-react";
import { LinkButton } from "@libs/design";

export function FinancialSourcesViewRightAction() {
    return (
        <LinkButton
            to={"/financialsources/add"}
            leftIcon={<IconPlus size={18} />}
        >
            Tilføj finanskilde
        </LinkButton>
    );
}
