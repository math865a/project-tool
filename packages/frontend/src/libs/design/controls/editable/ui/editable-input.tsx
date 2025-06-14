import { TextInput, TextInputProps } from "@mantine/core";
import { useEditable } from "../use-editable.ts";
import { useClickOutside } from "@mantine/hooks";
import { useEffect } from "react";

interface Props extends Omit<TextInputProps, "onKeyDown"> {
    selectAllOnFocus?: boolean;
}
export function EditableInput({ selectAllOnFocus = true, ...props }: Props) {
    const { isEditing, finish, cancel } = useEditable();

    const ref = useClickOutside<HTMLInputElement>(finish);

    useEffect(() => {
        if (isEditing) {
            ref.current.focus();
            if (selectAllOnFocus) ref.current.select();
        }
    }, [isEditing]);

    if (!isEditing) return null;
    return (
        <TextInput
            w={"100%"}
            ref={ref}
            {...props}
            onKeyDown={(event) => {
                console.log(event.key);
                if (event.key === "Enter") {
                    finish();
                } else if (event.key === "Escape") {
                    cancel();
                }
            }}
        />
    );
}
