import type { Avatar as AvatarType } from "@/types";
import { Avatar } from "./avatar";
import { Group, GroupProps, Text, TextProps } from "@mantine/core";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";

interface Props extends GroupProps {
    avatar: AvatarType;
    name: string;
    textProps?: TextProps;
    to?: string;
    size?: number;
}

export function Identity({
    name,
    size,
    avatar,
    textProps,
    to,
    ...props
}: Props) {
    const TextComponent = useMemo(() => {
        return to ? (
            <Text component={Link} to={to} {...textProps}>
                {name}
            </Text>
        ) : (
            <Text {...textProps}>{name}</Text>
        );
    }, [to, textProps, name]);

    return (
        <Group {...props}>
            <Avatar {...avatar} size={size} />
            {TextComponent}
        </Group>
    );
}
