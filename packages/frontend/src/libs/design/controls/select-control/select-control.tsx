import { Select, SelectProps } from '@mantine/core';

import { SelectControlItem } from './select-control-item';
import { Option } from '@shared';

export interface SelectControlProps extends Omit<SelectProps, 'data'> {
    data: Option[];
    defaultItemComponent?: boolean;
    people?: boolean;
}

export function SelectControl({
    defaultItemComponent = false,
    itemComponent,
    people,
    ...rest
}: SelectControlProps) {
    return (
        <Select {...rest} itemComponent={defaultItemComponent ? undefined : SelectControlItem} />
    );
}
