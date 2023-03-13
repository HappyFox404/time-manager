export interface ApiResponse<T> {
    message: string | null;
    statusCode: number;
    data: T | null
}