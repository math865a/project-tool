import { DynamicProps } from '../types.ts';
import { useListState } from '@mantine/hooks';

import { useEffect, useState } from 'react';

import { Option } from '@shared';
import { api } from '../../../config';
import { defaultColors, drawColor, generateId } from '../../../util';

export const useDynamicController = <T extends Option = Option>({
    url,
    initialOptions,
}: DynamicProps<T>) => {
    const [options, handlers] = useListState<T>(initialOptions || []);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasLoaded, setHasLoaded] = useState<boolean>(false);

    const getOptions = async () => {
        setIsLoading(true);
        const data = await api.get(url).then((res) => res.data as T[]);
        handlers.setState(data);
        setIsLoading(false);
        setHasLoaded(true);
    };

    useEffect(() => {
        if (!initialOptions && options.length === 0 && !hasLoaded) {
            getOptions();
        }
    }, [initialOptions, options, hasLoaded]);

    const createOption = (label: string): Option => {
        const id = generateId();
        const option: Option = {
            value: id,
            label,
            color: drawColor(options, defaultColors),
        };
        handlers.append(option as T);
        api.put(url, option);
        return option;
    };

    return {
        options,
        createOption,
        isLoading,
    };
};
