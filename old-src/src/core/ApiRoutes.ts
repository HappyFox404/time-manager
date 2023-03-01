enum ApiRoutes{
    UserLogin = 'user/authorization',
    UserRegistration = 'user/register',
    YserRefresh = 'user/refresh'
}

export default ApiRoutes;

export class RouteBuilder{
    private static _apiAdress : string = 'http://localhost:7000/api/';

    public static route(needRoute: ApiRoutes) : string {
        return `${this._apiAdress}${needRoute}`;
    }
}