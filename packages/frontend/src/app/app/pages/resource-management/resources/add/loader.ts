import { CalendarNode, Option } from '@shared';
import { api } from '@libs/config';

export interface AddResourceData {
    resourceTypes: Option[];
    calendars: Option[];
    defaultCalendarId: string;
}

export async function addResourceLoader(): Promise<AddResourceData> {
    return await Promise.all([
        getResourceTypeOptions(),
        getCalendarOptions(),
        getDefaultCalendarId(),
    ]).then((res) => ({
        resourceTypes: res[0],
        calendars: res[1],
        defaultCalendarId: res[2],
    }));
}

async function getResourceTypeOptions() {
    return await api.get<Option[]>('resourcetypes/options').then((res) => res.data);
}

async function getDefaultCalendarId() {
    const data = await api.get<CalendarNode>('calendars/default').then((res) => res.data);
    return data.id;
}

async function getCalendarOptions() {
    return await api.get<Option[]>('calendars/options').then((res) => res.data);
}
