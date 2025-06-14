import { useDataTable } from '../state';
import { Table } from '@tanstack/react-table';
import { Fallback } from '../../../design';

export function EmptyFallback({ table }: { table: Table<any> }) {
    const emptyFallback = useDataTable((s) => s.noRowsOverlay);
    const isEmpty = table.getRowModel().flatRows.length === 0;

    if (isEmpty) {
        const colSpan = table.getAllColumns().length;

        return isEmpty ? (
            <tbody>
                <tr>
                    <td colSpan={colSpan}>
                        {emptyFallback ? (
                            emptyFallback
                        ) : (
                            <Fallback.Empty isVisible={true} title={'Theres no rows'} />
                        )}
                    </td>
                </tr>
            </tbody>
        ) : null;
    }
    return null;
}
