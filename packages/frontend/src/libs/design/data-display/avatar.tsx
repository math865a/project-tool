import { createStyles, Paper, Text } from '@mantine/core';
import { useMemo } from 'react';

export interface AvatarType {
    color: string;
    text: string;
}

interface Props extends AvatarType {
    size?: number;
}

const useStyles = createStyles((theme, { color, size }: { color: string; size: number }) => ({
    root: {
        backgroundColor: !color ? 'transparent' : theme.fn.rgba(color, 0.4),
        width: size,
        height: size,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export function Avatar({ text, color, size = 30 }: Props) {
    const { classes } = useStyles({ color: color, size });

    const fontSize = useMemo(() => {
        if (size < 20) return 'xs';
        if (size < 30) return 'sm';
        if (size < 40) return 'md';
        if (size < 50) return 'lg';
        return 'xl';
    }, [size]);

    return (
        <Paper className={classes.root} radius={'xl'}>
            <Text fw={600} size={fontSize} color={'#282828'}>
                {text}
            </Text>
        </Paper>
    );
}
