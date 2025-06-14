export interface EditableProps {
    initialState?: boolean;
    onStart?: () => void | boolean;
    onFinish?: () => void | boolean;
    onCancel?: () => void;
    disabled?: boolean;
}
