import { Flex, FlexProps } from '@mantine/core';
import React from 'react';
import { Children } from '../../../../types';
import { useEditable } from '../use-editable.ts';

export interface EditablePreviewWrapperProps extends Children, FlexProps {}

export function EditablePreviewWrapper({ children, ...props }: EditablePreviewWrapperProps) {
    const { isEditing, start } = useEditable();

    if (isEditing) return null;

    return (
        <Flex align={'center'} style={{ flex: 1 }} {...props}>
            {children}
        </Flex>
    );
}
