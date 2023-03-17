export class RouteBuilder{
    public static ApiAdress : string;

    public static CreateRoute(route: string) : string {
        return `${this.ApiAdress}${route}`;
    }
}