import { IconBusinessplan, IconFolder } from '@tabler/icons-react';
import { HeaderLink } from '@libs/design';

export function ProjectManagementLink() {
    return (
        <HeaderLink
            url={'projects'}
            label={'Projektstyring'}
            subLinks={[
                {
                    id: 'projects',
                    url: 'projects',
                    label: 'Projekter',
                    icon: IconFolder,
                },
                {
                    id: 'project-managers',
                    url: 'project-managers',
                    label: 'Project Managers',

                    icon: IconBusinessplan,
                },
            ]}
        />
    );
}
