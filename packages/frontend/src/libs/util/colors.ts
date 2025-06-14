import { DEFAULT_THEME, useMantineTheme } from '@mantine/core';
import { useMemo } from 'react';
import _ from 'lodash';

export const useMantineColors = () => {
    const { colors } = useMantineTheme();

    return useMemo(() => {
        return _.values(_.mapValues(colors, (d) => d[6]));
    }, [colors]);
};

export function getDefaultColors(): string[] {
    return _.values(_.mapValues(DEFAULT_THEME.colors, (d) => d[6]));
}

export const defaultColors = getDefaultColors();

export function drawColor<T extends any>(
    pickedColors: string[] | ({ color?: string } & T)[] = [],
    colors: string[] = getDefaultColors(),
) {
    function getPickedColors() {
        if (pickedColors.length === 0) {
            return [];
        } else if (typeof pickedColors[0] === 'string') {
            return pickedColors as string[];
        }
        return pickedColors.map((d) => d.color).filter((d) => typeof d === 'string') as string[];
    }

    const picked = getPickedColors();

    const nonExistingColors = colors.filter((d) => !picked.includes(d));

    if (nonExistingColors?.length === 0) {
        return _.shuffle(picked)[0];
    }
    return _.shuffle(nonExistingColors)[0];
}
