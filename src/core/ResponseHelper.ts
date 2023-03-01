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

export function getResponseApi<T>(data : any) : ApiResponse<T> | null{
    try{
        return <ApiResponse<T>>data;
    } catch (e) {
        console.error(e);
        return null;
    }
}
export function getDataApiResponse<T>(data : any) : ApiResponseData<T> | null{
    try {
        return <ApiResponseData<T>>data.value;
    } catch(e){
        console.error(e);
        return null;
    }
}

export function isResponseSuccess<T>(data: ApiResponse<T> | null) : boolean {
    if(data) return data.statusCode === 200;
    return false;
}

export function isResponseError<T>(data: ApiResponse<T> | null) : boolean {
    if(data) return data.statusCode === 400;
    return false;
}