import { FetcherWithComponents } from 'react-router-dom';
import { useEffect } from 'react';
import { FormResponse } from '@shared';
import { notifyResponse } from './notify-functions.tsx';

export const useActionFeedback = (fetcher: FetcherWithComponents<FormResponse>) => {
    useEffect(() => {
        if (fetcher.data && fetcher.state === 'idle') {
            notifyResponse(fetcher.data);
        }
    }, [fetcher.data, fetcher.state]);
};
