import { useDisclosure } from "@mantine/hooks";
import { EditableProps } from "./editable.types.ts";

export const useEditableContext = ({
    initialState = false,
    onStart,
    onFinish,
    onCancel,
    disabled,
}: EditableProps) => {
    const [isEditing, handlers] = useDisclosure(initialState);

    const start = () => {
        if (disabled) return;
        const result = onStart ? onStart() : true;
        if (result === false) {
            return;
        }
        handlers.open();
    };

    const finish = () => {
        console.log("finish");
        if (disabled) return;
        const result = onFinish ? onFinish() : true;
        if (result === false) {
            return;
        }
        handlers.close();
    };

    const cancel = () => {
        if (disabled) return;
        if (onCancel) onCancel();
        handlers.close();
    };

    return {
        isEditing,
        start,
        finish,
        cancel,
        disabled,
    };
};
