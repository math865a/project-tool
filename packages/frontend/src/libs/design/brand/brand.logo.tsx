import { createStyles, Flex, Paper } from "@mantine/core";
import { useMemo } from "react";

interface Props {
    barHeightFrac?: number;
    w?: number;
    h?: number;

    bars: Omit<BarProps, "h">[];
}

interface BarProps {
    w: string;
    solid: boolean;
    h: number;
}

export function BrandLogo({
    w = 24,
    h = 24,
    barHeightFrac = 0.25,
    bars,
}: Props) {
    const barHeight = useMemo(() => {
        return h * barHeightFrac;
    }, [h, barHeightFrac]);

    const gap = useMemo(() => {
        return (h - barHeight * bars.length) / (bars.length - 1);
    }, [h, barHeightFrac, bars.length]);

    return (
        <Flex direction={"column"} w={w} h={h} gap={gap}>
            {bars.map((bar, index) => (
                <Bar key={index} {...bar} h={barHeight} />
            ))}
        </Flex>
    );
}

function Bar({ w, solid, h }: BarProps) {
    const { classes, cx } = useStyles();
    return (
        <Paper
            radius={"sm"}
            withBorder={true}
            className={cx(classes.bar, solid ? classes.solid : classes.opacity)}
            w={w}
            h={h}
        />
    );
}

const useStyles = createStyles((theme) => ({
    bar: {
        border: `2px solid ${theme.colors.blue[7]}`,
    },
    opacity: {
        backgroundColor: theme.fn.rgba(theme.colors.blue[7], 0.4),
    },
    solid: {
        backgroundColor: theme.colors.blue[7],
    },
}));
