import { MultiSelect, MultiSelectProps } from '@mantine/core';
import { SelectControlItem } from './select-control-item';

import { SelectControlLabel } from './select-control-label';
import { Option } from '@shared';

export interface MultiSelectControlProps extends Omit<MultiSelectProps, 'data'> {
    data: Option[];
    defaultItemComponent?: boolean;
    people?: boolean;
}

export function MultiSelectControl({
    itemComponent,
    defaultItemComponent,
    people,
    ...rest
}: MultiSelectControlProps) {
    return (
        <MultiSelect
            {...rest}
            valueComponent={SelectControlLabel}
            itemComponent={defaultItemComponent ? undefined : SelectControlItem}
        />
    );
}
