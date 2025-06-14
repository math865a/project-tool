import {CellContext} from "@tanstack/react-table";
import {useMemo} from "react";

import {useValidatedState} from "@mantine/hooks";
import _ from "lodash";
import {createStyles, InputProps, rem} from "@mantine/core";
import {ColMeta, InputCellMeta} from "../config";
import {useDataTable} from "../state";

export const useStyles = createStyles(
    (theme, {rowHeight}: { rowHeight: number, }) => ({
        wrapper: {
            border: "1px solid transparent",
            marginTop: 0,
            minHeight: rowHeight,
            maxHeight: rowHeight,
        },
        input: {
            minHeight: rowHeight,
            maxHeight: rowHeight,
            fontSize: theme.fontSizes.xs,
            paddingLeft: rem(4),
            paddingRight: rem(4),
        },
    })
);

const useCellTextStyles = createStyles(
    (theme, ctx: CellContext<any, any>) => {
        let fw: number = 350;
        if (ctx.row.subRows.length > 0) {
            fw = 500;
        }

        return {
            text: {
                fontWeight: fw,
            },
        };
    }
);


export const useInputCell = <V extends any>(cell: CellContext<any, V>) => {
    const {
        editable,
        onSave,
        validate,
        saveOnChange,
        saveOnBlur,
    }: InputCellMeta<V> = useMemo(() => {
        const meta = cell.column.columnDef.meta as unknown as
            | ColMeta<V>
            | undefined;
        return _.defaults(meta?.inputProps ?? {}, {
            editable: true,
            saveOnChange: false,
            saveOnBlur: true,
        });
    }, [cell.column.columnDef.meta]);

    const handleSave = (v: V | undefined) => (onSave ? onSave(cell.row.original.id, v) : null);

    const handleValidate = (v: V | undefined) => {
        let result: boolean = false;
        if (!validate) {
            result = true;
        } else {
            result = validate(v) !== null;
        }
        if (result && saveOnChange) {
            handleSave(v);
        }
        return result;
    };

    const [{lastValidValue, value, valid}, setValue] = useValidatedState<
        V | undefined
    >(cell?.getValue(), handleValidate);

    const save = () => {

        if (valid) {
            handleSave(value);
        } else {
            setValue(lastValidValue);
            handleSave(lastValidValue);
        }
    };

    const handleChange = (v: V | undefined) => {
        setValue(v);

    };

    const handleCancel = () => {
        setValue(lastValidValue)
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case "Enter":
                save();
                break;
            case "Escape":
                handleCancel()
                break;
            default:
                break;
        }
    };

    const rowHeight = useDataTable((s) => s.rowHeight);

    const {classes: {text}} = useCellTextStyles(cell)

    const {classes, cx} = useStyles({rowHeight});

    const inputProps: InputProps = useMemo(() => {
        return {
            classNames: {
                input: cx(classes.input, text),
                wrapper: classes.wrapper,
            },
            error: !valid,
            variant: "unstyled",
            onKeyDown,
            onBlur: saveOnBlur ? save : undefined,
        };
    }, [classes, valid, saveOnBlur, save, onKeyDown]);

    return {
        inputProps,
        handleChange,
        value,
        save,
        setValue,
        handleSave

    };
};
