import React from 'react';

import { useDynamicController } from './use-dynamic-controller.ts';
import { DynamicContext } from './context.tsx';
import { Option } from '@shared';
import { DynamicProviderProps } from '../types.ts';

export function DynamicProvider<T extends Option = Option>({
    children,
    ...props
}: DynamicProviderProps<T>) {
    const bag = useDynamicController<T>(props);

    return <DynamicContext.Provider value={bag}>{children}</DynamicContext.Provider>;
}
