import { rem, useMantineTheme } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconExclamationCircle } from '@tabler/icons-react';
import { FormResponse } from '@shared';

export const useNotify = () => {
    const { colors, spacing } = useMantineTheme();

    function notifyResponse(response: FormResponse) {
        if (response.status === 'ok') {
            notify(response.message);
        } else {
            notifyError(response.message);
        }
    }

    function notify(message?: string, title: string = 'The changes has been saved.') {
        title = title === message ? '' : title;

        notifications.show({
            title: title,
            message: message,
            autoClose: 4000,
            styles: {
                icon: {
                    maxWidth: rem(0),
                    marginLeft: 0,
                    marginRight: rem(4),
                },
                description: {},
            },
            icon: <></>,
        });
    }

    function notifyError(message?: string) {
        const title = 'An error occurred';
        message = message ? (message === title ? '' : message) : '';

        notifications.show({
            title: title,
            message: message,
            autoClose: 6000,
            styles: {
                icon: {
                    marginTop: 4,
                    marginRight: spacing.xs,
                    marginLeft: rem(4),
                },
            },
            icon: <IconExclamationCircle size={16} color={colors.red[7]} />, //<FontAwesomeIcon icon={faExclamationCircle} color={colors.red[7]} fixedWidth fontSize="1.4rem"/>,
        });
    }

    return {
        notify,
        notifyResponse,
        notifyError,
    };
};
