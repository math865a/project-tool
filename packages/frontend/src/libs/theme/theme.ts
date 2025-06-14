import { getStylesRef, MantineThemeOverride, rem } from '@mantine/core';

export const theme: MantineThemeOverride = {
    globalStyles: (theme) => ({
        body: {
            backgroundColor: 'rgba(0,0,0,0.04)',
            position: 'relative',
        },
        transparent: {
            ref: getStylesRef('transparent'),
            color: theme.fn.rgba(theme.colors.blue[5], 0),
        },
        a: {
            textDecoration: 'none',
        },
        '.recharts-cartesian-grid': {
            stroke: 'rgba(0, 0, 0, 0.1)',
        },
        '.recharts-cartesian-axis-tick': {
            fontSize: 12,
            fill: theme.colors.gray[5],
        },
        '.recharts-cartesian-axis-line': {
            stroke: 'transparent',
        },
        '.recharts-cartesian-axis-tick-line': {
            strokeWidth: 0,
        },
    }),
    loader: 'bars',
    colors: {},
    components: {
        Notification: {
            defaultProps: {
                radius: 'md',
            },
            styles: (theme) => ({
                icon: {
                    backgroundColor: 'transparent',
                    display: 'flex',
                    justifyContent: 'center',
                },
                root: {
                    paddingTop: '0.5rem',
                    paddingBottom: '0.5rem',
                    shadow: theme.shadows.xl,
                },
                description: {
                    fontSize: rem(13),
                    maxWidth: rem(300),
                    minWidth: rem(200),
                },
                title: {
                    fontSize: rem(13),
                    maxWidth: rem(300),
                    marginBottom: rem(0),
                    minWidth: rem(200),
                },
            }),
        },
        Modal: {
            defaultProps: (theme) => ({
                radius: theme.radius.lg,
                transitionProps: {
                    transition: 'fade',
                    duration: 500,
                },
            }),
            styles: (theme) => ({
                header: {
                    backgroundColor: 'transparent',
                    marginBottom: theme.spacing.sm,
                },
                title: {
                    fontWeight: 500,
                    fontSize: theme.fontSizes.xl,
                },
                body: {
                    paddingLeft: rem(20),
                    paddingRight: rem(20),
                    position: 'relative',
                },

                content: {
                    overflowY: 'visible',
                    padding: theme.spacing.xs,
                },
            }),
        },
        Select: {
            defaultProps: {
                transitionProps: {
                    transition: 'pop-top-left',
                    duration: 150,
                    timingFunction: 'ease',
                },
                searchable: true,
            },
            styles: (theme) => ({
                wrapper: {
                    marginTop: rem(4),
                },
                item: {
                    paddingTop: rem(6),
                    paddingBottom: rem(6),
                },
            }),
        },
        TextInput: {
            defaultProps: {},
            styles: (theme) => ({
                wrapper: {
                    marginTop: rem(4),
                },
            }),
            variants: {},
        },
        MultiSelect: {
            defaultProps: {
                transitionProps: {
                    transition: 'pop-top-left',
                    duration: 150,
                    timingFunction: 'ease',
                },
                clearable: true,
                searchable: true,
            },
            styles: (theme) => ({
                wrapper: {
                    marginTop: rem(4),
                },
                item: {
                    paddingTop: rem(6),
                    paddingBottom: rem(6),
                },
            }),
        },
        NumberInput: {
            defaultProps: {
                stepHoldDelay: 500,
                stepHoldInterval: (t: number) => Math.max(1000 / t ** 2, 25),
            },
            styles: (theme) => ({
                wrapper: {
                    marginTop: rem(4),
                },
            }),
        },
        Radio: {
            defaultProps: {
                size: 'xs',
                maw: rem(250),
            },
            styles: (theme) => ({
                root: {
                    marginBottom: rem(8),
                },
                label: {
                    paddingLeft: '0.5rem',
                },
                error: {
                    paddingLeft: rem(8),
                },
            }),
        },
        Checkbox: {
            defaultProps: {
                size: 'xs',
            },
            styles: (theme) => ({
                label: {
                    fontSize: theme.fontSizes.sm,
                },
            }),
        },
        Textarea: {
            defaultProps: {},
            styles: (theme) => ({
                wrapper: {
                    marginTop: rem(4),
                },
            }),
        },
        Text: {
            variants: {
                formlabel: (theme) => ({
                    root: {
                        fontSize: theme.fontSizes.sm,
                        fontWeight: 500,
                        marginBottom: rem(4),
                    },
                }),
            },
        },
        Avatar: {
            defaultProps: {
                size: 'sm',
            },
        },
        DatePickerInput: {
            defaultProps: (theme) => ({
                valueFormat: 'DD/MM/YYYY',
            }),
            styles: {
                input: {
                    letterSpacing: 0.5,
                },
            },
        },
        Tooltip: {
            defaultProps: {
                transitionProps: { transition: 'pop', duration: 150 },
                withinPortal: true,
            },
            styles: (theme) => ({
                tooltip: {
                    fontSize: rem(11),
                    fontWeight: 500,
                },
            }),
        },
        Container: {
            defaultProps: {
                sizes: {
                    xs: 600,
                    sm: 900,
                    md: 1200,
                    lg: 1536,
                    xl: 1900,
                },
            },
            variants: {
                profile: (theme) => ({
                    root: {
                        marginTop: theme.spacing.xl,
                        marginBottom: theme.spacing.xl,
                    },
                }),
                fullpage: (theme) => ({
                    root: {
                        display: 'flex',
                        flex: 1,
                    },
                }),
            },
        },
        Paper: {
            defaultProps: (theme) => ({
                withBorder: true,
                radius: theme.radius.md,
            }),
            variants: {
                fullpage: (theme) => ({
                    root: {
                        flex: 1,
                        flexGrow: 1,
                        padding: theme.spacing.md,
                    },
                }),
            },
        },
        Button: {
            defaultProps: {
                radius: 'sm',
            },
        },
        ActionIcon: {},
        SimpleGrid: {
            defaultProps: {
                spacing: 'xl',
                verticalSpacing: 'xl',
                cols: 2,
            },
        },
        Menu: {
            defaultProps: {
                shadow: 'xl',
                transitionProps: {
                    transition: 'skew-up',
                },
            },
            styles: (theme) => ({
                itemIcon: {
                    marginRight: '1rem',
                    fontSize: '0.8rem',
                },
                itemLabel: {
                    fontSize: '0.8rem',
                },
            }),
        },
    },
};
