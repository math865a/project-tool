import { notifications } from '@mantine/notifications';
import { rem } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';
import { FormResponse } from '@shared';

export function notifyResponse(response: FormResponse) {
    if (response.status === 'ok') {
        notify(response.message);
    } else {
        notifyError(response.message);
    }
}

export function notify(message?: string, title: string = 'The changes has been saved.') {
    title = title === message ? '' : title;

    notifications.show({
        //title: title,
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

export function notifyError(message?: string) {
    const title = 'An error occurred';
    message = message ? (message === title ? '' : message) : '';

    notifications.show({
        // title: title,
        message: message,
        autoClose: 6000,
        styles: {
            icon: {
                marginTop: 4,
                marginRight: '8px',
                marginLeft: rem(4),
            },
        },
        icon: <IconExclamationCircle size={16} color={'#F03E3E'} />, //<FontAwesomeIcon icon={faExclamationCircle} color={colors.red[7]} fixedWidth fontSize="1.4rem"/>,
    });
}
