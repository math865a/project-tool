import { useContext } from "react";
import { EditableContext } from "./editable.context.tsx";
import invariant from "tiny-invariant";

export const useEditable = () => {
    const ctx = useContext(EditableContext);
    invariant(ctx, "useEditable must be used within a EditableProvider");
    return ctx;
};
