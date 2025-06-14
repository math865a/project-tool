import { Text, TextProps, UnstyledButton } from "@mantine/core";
import React from "react";
import { useEditable } from "../use-editable.ts";

interface Props extends TextProps {}

export function EditablePreview({ children, ...props }: Props) {
    const { isEditing, start } = useEditable();

    if (isEditing) return null;

    return (
        <UnstyledButton onClick={start} style={{ flex: 1 }}>
            {typeof children === "string" ? (
                <Text {...props}>{children}</Text>
            ) : (
                children
            )}
        </UnstyledButton>
    );
}
