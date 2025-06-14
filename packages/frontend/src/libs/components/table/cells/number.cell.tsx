import { NumberInput, NumberInputProps, createStyles } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import { CellContext } from "@tanstack/react-table";
import { useInputCell } from "./use-input-cell.ts";

const useStyles = createStyles((theme) => ({
    input: {
        textAlign: "center",
    },
}));

export interface NumberCellProps extends CellContext<any, number> {
    config?: Omit<
    NumberInputProps,
    "value" | "onChange" | "onBlur" | "onKeyPress" | "classNames"
>
}

export function NumberCell({config, ...context }: NumberCellProps) {
    const { classes, cx } = useStyles();

    const { inputProps, handleChange, save, value, setValue } =
        useInputCell(context);

    const { ref, focused } = useFocusWithin();

    return (
  
            <NumberInput
                ref={ref}
                {...inputProps}
                classNames={{
                    ...inputProps.classNames,
                    input: cx(inputProps.classNames?.input, classes.input),
                }}
                value={value}
                onChange={(v) => handleChange(typeof v === "string" ? 0 : v)}
                onBlur={save}
                onKeyPress={(e) => e.key === "Enter" && save()}
                {...config}
            />
      
    );
}
