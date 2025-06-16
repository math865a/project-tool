import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { parseRequest } from '@libs/util';
import { api } from '@libs/config';
import {CreateResourceTypeDto, FormResponse} from '@shared';

export async function addResourceTypeAction({ request }: ActionFunctionArgs) {
    const body: { data: CreateResourceTypeDto } = await parseRequest(request);
    const result = await api.post<FormResponse>('resourcetypes', body.data).then((res) => res.data);

    if (result.status === 'ok') {
        return redirect('/resourcetypes');
    }

    return result;
}
