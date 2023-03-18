export enum AppRoutes {
    Authorization = '/authorization',
    Schedules = '/schedules',
    Registration = '/registration'
}

export function GetPageName(currentLocation: string) : string {
    switch (currentLocation){
        case AppRoutes.Authorization:
            return 'Авторизация';
        case AppRoutes.Registration:
            return 'Регистрация';
        case AppRoutes.Schedules:
            return 'Расписание';
        default:
            return 'Расписание';
    }
}