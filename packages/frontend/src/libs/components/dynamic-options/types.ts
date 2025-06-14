import { useDynamicController } from './state';

import { ButtonProps, MantineNumberSize } from '@mantine/core';
import { Children } from '../../types';
import { Option } from '@shared';

export interface DynamicProps<T extends Option = Option> {
    initialOptions?: T[];
    url: string;
}

export interface DynamicProviderProps<T extends Option = Option>
    extends DynamicProps<T>,
        Children {}

export interface OptionsProps<T extends Option = Option> extends DynamicProps<T> {
    creatable?: boolean;
    deletable?: boolean;
    getInitialValue?: (options: T[]) => T | T[] | undefined;
    multi?: boolean;
}

export type DynamicBag<T extends Option = Option> = ReturnType<typeof useDynamicController<T>>;

export interface DynamicEditorProps<T extends Option = Option>
    extends DynamicProps<T>,
        Omit<ButtonProps, 'onClick'> {
    title?: string;
    noValueLabel?: string;
    value?: T;
    onChange: (option: T) => void;
    getSecondaryAction?: (option: T) => React.ReactNode;
    getLeftSection?: (option: T, type: 'option' | 'value') => React.ReactNode;
    closeOnSelect?: boolean;
    itemSpacing?: MantineNumberSize;
    customPreview?: React.ReactNode;
}

export interface DynamicEditorItemProps<T extends Option = Option> {
    option: T;
    isSelected: boolean;
    handleClick: (option: T) => void;
    secondaryAction?: React.ReactNode;
    leftSection?: React.ReactNode;
}
