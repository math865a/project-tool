import {TextInput} from "@mantine/core";
import {CellContext} from "@tanstack/react-table";
import {useInputCell} from "./use-input-cell";
import {useFocusWithin} from "@mantine/hooks";

export function TextCell(props: CellContext<any, string>) {
    const {inputProps, handleChange, setValue, save, value} = useInputCell(props);

    const {ref, focused} = useFocusWithin()

    return (
        <TextInput
            {...inputProps}
            ref={ref}
            value={value}
            w="100%"
            variant={focused ? "outlined" : "unstyled"}
            onChange={(e) => handleChange(e.currentTarget.value)}

        />
    );
}
