import { Box, MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { Outlet } from 'react-router-dom';
import { theme } from '@libs/theme';
import { Children } from '@libs/types';

export function Root() {
    return (
        <ThemeParent>
            <Box pos={'absolute'} left={0} top={0} right={0} bottom={0}>
                <Outlet />
            </Box>
        </ThemeParent>
    );
}

function ThemeParent({ children }: Children) {
    return (
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
            <DatesProvider settings={{ locale: 'da', firstDayOfWeek: 1, weekendDays: [0, 6] }}>
                <ModalsProvider>
                    <Notifications containerWidth={`max-content`} transitionDuration={300} />
                    {children}
                </ModalsProvider>
            </DatesProvider>
        </MantineProvider>
    );
}
