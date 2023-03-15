export class RouteBuilder{
    private static _apiAdress : string = 'http://localhost:7000/api/';

    public static CreateRoute(route: string) : string {
        return `${this._apiAdress}${route}`;
    }
}