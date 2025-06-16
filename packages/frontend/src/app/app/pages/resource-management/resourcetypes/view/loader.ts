import { api } from '@libs/config';
import { ResourceTypeViewRow } from '@shared';

export async function resourceTypesViewLoader() {
    return await api.get<ResourceTypeViewRow[]>('resourcetypes').then((res) => res.data);
}
