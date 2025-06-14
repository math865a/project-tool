import { api } from '@libs/config';
import { ResourceViewRow } from '@shared';

export async function resourcesViewLoader() {
    return await api.get<ResourceViewRow[]>('resources').then((res) => res.data);
}
