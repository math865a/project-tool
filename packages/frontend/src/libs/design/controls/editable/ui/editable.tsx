import { useEditableContext } from '../use-editable-context.ts';
import { EditableContext } from '../editable.context.tsx';
import { EditableProps } from '../editable.types.ts';
import { Children } from '../../../../types';

interface Props extends Children, EditableProps {}

export function Editable({ children, ...props }: Props) {
    const ctx = useEditableContext(props);

    return <EditableContext.Provider value={ctx}>{children}</EditableContext.Provider>;
}
