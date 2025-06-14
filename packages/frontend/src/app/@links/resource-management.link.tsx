import { IconUsers, IconUsersGroup } from '@tabler/icons-react';
import { HeaderLink } from '@libs/design';

export function ResourceManagementLink() {
    return (
        <HeaderLink
            url={'resources'}
            label={'Ressourcestying'}
            subLinks={[
                {
                    id: 'resources',
                    url: 'resources',
                    label: 'Ressourcer',
                    icon: IconUsers,
                },
                {
                    id: 'resource-types',
                    url: 'resourcetypes',
                    label: 'Ressourcetyper',
                    icon: IconUsersGroup,
                },
            ]}
        />
    );
}
