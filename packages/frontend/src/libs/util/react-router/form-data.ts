import _ from "lodash";

export function toFormData(values: { [key: string]: any }) {
    const formData = new FormData();
    _.entries(values).forEach(([key, value]) => {
        formData.set(key, value);
    });
    return formData;
}

export async function parseRequest<T extends { [index: string]: any } = any>(
    request: Request,
): Promise<T> {
    return parseFormData(await request.formData());
}

export function parseFormData(formData: FormData): any {
    const data: any = {};

    formData.forEach((value, key) => {
        data[key] = value as any;
    });
    return data;
}
