import _ from "lodash";


export interface InputCellMeta<TValue extends any> {
    editable?: boolean;
    validate?: (value?: TValue) => string | null;
    onSave?: (id: string, value?: TValue) => void;
    saveOnChange?: boolean;
    saveOnBlur?: boolean;
}

export interface ColMeta<TValue = any> {
    title?: string;
    tooltip?: string;
    description?: string;
    interactive?: boolean;
    resizeable?: boolean;
    hideable?: boolean;
    internalOnly?: boolean;
    orderable?: boolean;
    align?: React.CSSProperties["justifyContent"];
    headerAlign?: React.CSSProperties["justifyContent"];
    inputProps?: InputCellMeta<TValue>;
}

export interface DefaultColMeta<TValue = unknown> {
    title?: string;
    tooltip?: string;
    description?: string;
    interactive: boolean;
    resizeable: boolean;
    hideable: boolean;
    internalOnly: boolean;
    orderable: boolean;
    align: React.CSSProperties["justifyContent"];
    headerAlign:  any
    inputProps?: InputCellMeta<TValue>;
}

export const getMeta = <TValue = any>(colDef: any): DefaultColMeta<TValue> => {

    return _.defaults(colDef.meta as ColMeta<TValue> | undefined, {
        interactive: false,
        orderable: true,
        resizeable: true,
        hideable: true,
        align: "flex-start",
        headerAlign: "center",
        internalOnly: false,
    });
};
