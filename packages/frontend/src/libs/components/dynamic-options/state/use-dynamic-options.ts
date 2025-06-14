import React from 'react';
import { DynamicContext } from './context.tsx';
import { Option } from '@shared';
import { DynamicBag } from '../types.ts';

export const useDynamicOptions = <T extends Option = Option>(): DynamicBag<T> => {
    const value = React.useContext(DynamicContext);
    if (!value) {
        throw new Error('useDynamicOptions must be used within a DynamicContext');
    }
    return value as DynamicBag<T>;
};
