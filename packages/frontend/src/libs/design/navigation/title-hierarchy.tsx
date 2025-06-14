import { useMatches } from "react-router-dom";
import React, { Fragment } from "react";
import { Breadcrumbs } from "@mantine/core";

interface Props {
    handleKey?: string;
}

const useTitles = (handleKey: string = "title") => {
    return useMatches()
        .filter((match) => Boolean(match?.handle?.[handleKey]))
        .map((match) =>
            typeof match?.handle?.[handleKey] === "function"
                ? match?.handle?.[handleKey](match.data)
                : match?.handle?.[handleKey],
        ) as React.ReactNode[];
};

export function TitleHierarchy({ handleKey }: Props) {
    const titles = useTitles(handleKey);

    return (
        <Breadcrumbs>
            {titles.map((title, index) => (
                <Fragment key={index}>{title}</Fragment>
            ))}
        </Breadcrumbs>
    );
}
