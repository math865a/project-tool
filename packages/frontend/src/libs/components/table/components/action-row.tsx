import { ComponentProps, useDataTable } from '../state';
import { useMemo } from 'react';

export function ActionRow({ table }: ComponentProps) {
    const actionRow = useDataTable((state) => state.actionRow);
    const rowHeight = useDataTable((state) => state.rowHeight);

    const colSpan = useMemo(() => table.getFlatHeaders().length, [table]);

    if (!actionRow) return null;

    return (
        <tr style={{ zIndex: 10 }}>
            <td
                colSpan={colSpan}
                height={rowHeight}
                style={{ boxSizing: 'border-box', overflow: 'hidden', position: 'relative' }}
            >
                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {actionRow}
                </div>
            </td>
        </tr>
    );
}
