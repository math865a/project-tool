import {api} from '@libs/config';
import {ContractViewRow} from '@shared';

export async function contractsViewLoader() {
	return await api.get<ContractViewRow[]>('contracts').then((res) => res.data);
}
