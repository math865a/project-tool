import { ActionFunctionArgs } from 'react-router-dom';
import { api } from '@libs/config';

export async function deleteResourceAction({ params }: ActionFunctionArgs) {
    const id = params.resourceId;

    if (!id) {
        throw new Error('Resource ID is required');
    }

    return await api.delete(`resources/${id}`).then((res) => res.data);
}
