import { IconUsersPlus } from '@tabler/icons-react';
import { LinkButton } from '@libs/design';

export function ResourceTypesRightActions() {
    return (
        <LinkButton to={'/resourcetypes/add'} leftIcon={<IconUsersPlus size={18} />}>
            Tilføj resourcetype
        </LinkButton>
    );
}
