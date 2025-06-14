import { ActionIcon, ActionIconProps, Tooltip, TooltipProps } from '@mantine/core';
import React from 'react';
import { Children } from '../../../../types';
import { useEditable } from '../use-editable.ts';

interface Props extends Children {
    tooltip?: string;
    actionProps?: ActionIconProps;
    tooltipProps?: Omit<TooltipProps, 'label'>;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function EditableAction({ children, tooltip, actionProps, tooltipProps, onClick }: Props) {
    const { start } = useEditable();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        start();
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <Tooltip label={tooltip} disabled={!tooltip} {...tooltipProps}>
            <ActionIcon {...actionProps} onClick={handleClick}>
                {children}
            </ActionIcon>
        </Tooltip>
    );
}
