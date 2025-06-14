import {
    ActionIcon,
    AppShell,
    createStyles,
    Divider,
    Group,
    Header,
    Tooltip,
    UnstyledButton,
    useMantineTheme,
} from '@mantine/core';
import { Outlet, useNavigate } from 'react-router-dom';
import { HEADER_HEIGHT } from '@libs/config';
import { BrandLogo } from '@libs/design';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { ProjectManagementLink, ResourceManagementLink, SchedulingLink } from '../@links';

export function AppLayout() {
    const { colors, colorScheme } = useMantineTheme();

    const { classes } = useStyles();

    const nav = useNavigate();

    const handleNavigateHome = () => {
        nav('/app');
    };

    return (
        <AppShell
            key={'shell'}
            classNames={{ main: classes.main, root: classes.root }}
            header={
                <Header
                    bg={colorScheme === 'dark' ? colors.dark[7] : '#fff'}
                    height={HEADER_HEIGHT + 'px'}
                    px={'lg'}
                    sx={{
                        borderBottom: `1px solid ${colors.gray[4]}`,

                        overflow: 'hidden',
                    }}
                    key={'header'}
                >
                    <Group position={'apart'} sx={{ height: '100%' }} key={'inner-header'}>
                        <UnstyledButton onClick={handleNavigateHome}>
                            <BrandLogo
                                barHeightFrac={0.27}
                                h={35}
                                w={45}
                                key={'logo'}
                                bars={[
                                    {
                                        w: '33%',
                                        solid: false,
                                    },
                                    {
                                        w: '100%',
                                        solid: true,
                                    },
                                    {
                                        w: '66%',
                                        solid: false,
                                    },
                                ]}
                            />
                        </UnstyledButton>

                        <Group sx={{ height: '100%' }} spacing={'sm'} key={'links'}>
                            <ProjectManagementLink key={'project-management-link'} />
                            <ResourceManagementLink key={'resource-management-link'} />
                            <SchedulingLink key={'scheduling-link'} />
                        </Group>
                        <Group
                            sx={{ height: '100%' }}
                            spacing={'md'}
                            align={'center'}
                            key={'actions'}
                        >
                            <Tooltip
                                label={'Quick add'}
                                key={'quick-add'}
                                position={'bottom'}
                                withinPortal={true}
                            >
                                <ActionIcon variant={'filled'} color={'blue'}>
                                    <IconPlus size={20} />
                                </ActionIcon>
                            </Tooltip>
                            <Divider orientation={'vertical'} my={'sm'} key={'div'} />
                            <Tooltip
                                label={'Search'}
                                key={'search'}
                                position={'bottom'}
                                withinPortal={true}
                            >
                                <ActionIcon>
                                    <IconSearch size={20} />
                                </ActionIcon>
                            </Tooltip>
                            {/*<ColorSchemeAction key={'color-scheme'} />
                            <UserAction key={'user'} />*/}
                        </Group>
                    </Group>
                </Header>
            }
        >
            <Outlet />
        </AppShell>
    );
}

const useStyles = createStyles((theme) => ({
    root: {
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'rgb(243, 242, 245)',
    },
    main: {
        position: 'absolute',
        padding: 0,
        top: HEADER_HEIGHT + 'px',
        left: 0,
        right: 0,
        bottom: 0,
    },
}));
