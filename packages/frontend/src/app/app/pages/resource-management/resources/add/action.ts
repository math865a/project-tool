import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { parseRequest } from '@libs/util';
import { api } from '@libs/config';
import { CreateResourceDto, FormResponse } from '@shared';

export async function addResourceAction({ request }: ActionFunctionArgs) {
    const body: { data: CreateResourceDto } = await parseRequest(request);
    const result = await api.post<FormResponse>('resources', body.data).then((res) => res.data);

    if (result.status === 'ok') {
        return redirect('/resources');
    }

    return result;
}
