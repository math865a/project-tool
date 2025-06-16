import {
    Box,
    Container,
    createStyles,
    Flex,
    useMantineTheme,
} from "@mantine/core";

import { Outlet } from "react-router-dom";
import { TOOLBAR_HEIGHT } from "@libs/config";
import { TitleHierarchy, useHandle } from "@libs/design";

export function PagesLayout() {
    const rightActions = useHandle("rightActions");
    const pageSize = useHandle("pageSize");
    const { colors } = useMantineTheme();
    const { classes } = useStyles();

    return (
        <Container size={pageSize} py={0} my={0}>
            <Flex
                key={"toolbar"}
                h={TOOLBAR_HEIGHT + "px"}
                w={"100%"}
                justify={"space-between"}
                align={"center"}
                sx={(theme) => ({
                    // borderBottom: `1px solid ${colors.gray[4]}`,
                    overflow: "hidden",
                    //backgroundColor: theme.colorScheme === 'dark' ? colors.dark[7] : '#fff',
                })}
            >
                <TitleHierarchy key={"title"} />
                <Box key={"actions"}>{rightActions}</Box>
            </Flex>
            <Box className={classes.body} key={"body"}>
                <Outlet />
            </Box>
        </Container>
    );
}

const useStyles = createStyles((theme) => ({
    body: {
        position: "absolute",
        left: 0,
        top: TOOLBAR_HEIGHT + "px",
        overflow: "hidden",
        bottom: 55,
        right: 0,
        display: "flex",
        //paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
    },
}));
