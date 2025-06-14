import { IconUserPlus } from '@tabler/icons-react';
import { LinkButton } from '@libs/design';

export function ResourcesViewRightActions() {
    return (
        <LinkButton to={'/resources/add'} leftIcon={<IconUserPlus size={18} />}>
            Tilføj ressource
        </LinkButton>
    );
}
