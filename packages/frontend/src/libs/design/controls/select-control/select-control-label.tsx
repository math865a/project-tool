import {
    ActionIcon,
    Group,
    MultiSelectValueProps,
    Paper,
    Text,
} from "@mantine/core";
import React from "react";
import { IconX } from "@tabler/icons-react";

export function SelectControlLabel({
    label,
    value,
    color,
    onRemove,
}: MultiSelectValueProps & {
    value: string;
    color?: string;
}) {
    return (
        <Paper
            px={"6px"}
            py={"2px"}
            mx={"4px"}
            style={{ backgroundColor: color + "60" }}
            radius={"sm"}
            withBorder={false}
        >
            <Group noWrap spacing={"6px"}>
                <Text size="sm">{label}</Text>
                {/*<Text size="xs" opacity={0.65}>
                        {description}
                    </Text>*/}
                <ActionIcon
                    onClick={onRemove}
                    variant={"transparent"}
                    size={"xs"}
                    radius={"sm"}
                >
                    <IconX size={16} />
                </ActionIcon>
            </Group>
        </Paper>
    );
}
