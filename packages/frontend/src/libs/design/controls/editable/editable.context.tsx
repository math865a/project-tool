import { createContext } from "react";

import { useEditableContext } from "./use-editable-context.ts";

export const EditableContext = createContext<
    ReturnType<typeof useEditableContext> | undefined
>(undefined);
