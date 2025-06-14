import { Box, createStyles } from "@mantine/core";

interface Props {
    size?: number;
}

interface Props1 {
    w?: number;
    h?: number;
    gap?: number;
}

export function BrandLogo({ size = 24 }: Props) {
    const { classes, cx } = useStyles();
    return (
        <Box w={size} h={size}>
            <svg width={size} height={size} viewBox="0 0 6.3499998 6.3499998">
                <g>
                    <g transform="matrix(0.28955373,0,0,0.32261014,-0.3043188,-0.72645528)">
                        <path
                            d={paths[2]}
                            className={cx(classes.bar, classes.opacity)}
                        />
                        <path
                            className={cx(classes.bar, classes.solid)}
                            d={paths[1]}
                        />
                        <path
                            d={paths[3]}
                            className={cx(classes.bar, classes.opacity)}
                        />
                    </g>
                </g>
            </svg>
        </Box>
    );
}

const useStyles = createStyles((theme) => ({
    bar: {
        stroke: theme.colors.blue[7],
        strokeWidth: 0.1,
    },
    opacity: {
        fill: theme.fn.rgba(theme.colors.blue[7], 0.25),
    },
    solid: {
        fill: theme.colors.blue[7],
    },
}));

const paths = {
    1: "m 17.098071,12.996758 c 0,0.819108 -0.2467,0.984867 -1.872599,0.984867 h -11.2355953 c -1.6258988,0 -1.8482568,-0.165759 -1.8482568,-0.984867 v -1.987715 c 0,-0.819109 0.222358,-0.984867 1.8482568,-0.984867 h 11.2355953 c 1.625899,0 1.872599,0.165758 1.872599,0.984867 z",
    2: "m 12.102055,6.0085846 c 0,0.8207577 -0.164358,0.9868502 -1.247579,0.9868502 h -7.4854776 c -1.0832205,0 -1.2313621,-0.1660925 -1.2313621,-0.9868502 v -1.991716 c 0,-0.8207587 0.1481416,-0.9868512 1.2313621,-0.9868512 h 7.4854776 c 1.083221,0 1.247579,0.1660925 1.247579,0.9868512 z",
    3: "m 22.094719,19.985248 c 0,0.817722 -0.329062,0.983199 -2.497777,0.983199 h -14.9866624 c -2.1687141,0 -2.4653076,-0.165477 -2.4653076,-0.983199 v -1.984347 c 0,-0.817722 0.2965935,-0.983199 2.4653076,-0.983199 h 14.9866624 c 2.168715,0 2.497777,0.165477 2.497777,0.983199 z",
};
