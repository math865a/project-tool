import {createStyles, DefaultProps, Flex, MantineSizes, Selectors, Title,} from "@mantine/core";

export interface PageHeaderStylesParams {
    size: keyof MantineSizes;
}

const useStyles = createStyles((theme, {size}: PageHeaderStylesParams) => ({
    wrapper: {
        maxWidth: theme.breakpoints[size],
        width: theme.breakpoints[size],
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: theme.spacing.lg,
    },
}));

export type PageHeaderStylesNames = Selectors<typeof useStyles>;

export interface PageHeaderProps
    extends DefaultProps<PageHeaderStylesNames, PageHeaderStylesParams> {
    title?: string;
    leftActions?: React.ReactNode[] | React.ReactNode;
    rightActions?: React.ReactNode[] | React.ReactNode;
    size?: keyof MantineSizes;
}

export function PageHeader({
                               title,
                               leftActions,
                               rightActions,
                               classNames,
                               styles,
                               unstyled,
                               size = "lg",
                               className,
                               ...rest
                           }: PageHeaderProps) {
    const {classes, cx} = useStyles(
        {size},
        {name: "PageHeader", classNames, unstyled}
    );

    return (
        <Flex
            className={classes.wrapper}
            justify="space-between"
            align="center"
        >
            <Title order={4}>{title}</Title>
            <Flex>{leftActions}</Flex>

            <Flex>{rightActions}</Flex>
        </Flex>
    );
}
