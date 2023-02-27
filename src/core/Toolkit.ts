export function finalizeClassName(base : string[] | null, classes: string[] | null | undefined) : string {
    if(classes && base) return [...base, ...classes].join(' ');
    if(base) return base.join(' ');
    if(classes) return classes.join(' ');
    return '';
}

export type ApiResponse<T> = {
    contentType: null;
    jsonSerializerOptions: null;
    statusCode: number;
    value: ApiResponseData<T> | null;
}

export type ApiResponseData<T> = {
    message: string | null;
    data: T | null
}

export type ApiResponseResult<T> = {
    base: ApiResponse<T> | null;
    data: ApiResponseData<T> | null
}

export function getDataFromApiResponse<T>(data : any) : ApiResponseResult<T> | null{
    const t =  <ApiResponse<T>>data;
    return {base: t, data: t.value}
}

export function isResponseSuccess<T>(data: ApiResponse<T> | null) : boolean {
    if(data) return data.statusCode === 200;
    return false;
}

export function isResponseError<T>(data: ApiResponse<T> | null) : boolean {
    if(data) return data.statusCode === 400;
    return false;
}