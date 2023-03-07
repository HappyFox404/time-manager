import React, { useState } from 'react'
import DefaultMenu, {IDefaultMenuGroup, IDefaultMenuType} from "../../../components/DefaultMenu";
import {Link, useLocation} from "react-router-dom";
import AppRoutes from "../../../core/AppRoutes";

export function MainMenu(): JSX.Element {
    const location = useLocation();
    const styles = {
        height: '99vh',
    };
    function getItemPath(route : string) : boolean {
        const itemPath = location.pathname.split('/');
        const needRoute = route.split('/');
        let result = true;
        if(itemPath.length > 0 && needRoute.length > 0){
            needRoute.forEach(item => {
                if(itemPath.includes(item) === false){
                    result = false;
                }
            });
            return result;
        }
        return false;
    }

    const groups : IDefaultMenuGroup[] = [
        {label: "Расписание", items: [
                {isActive: getItemPath(AppRoutes.ScheduleView), name: 'Просмотр', link: AppRoutes.Base+AppRoutes.ScheduleView},
                {isActive: getItemPath(AppRoutes.ScheduleAdd), name: 'Добавление', link: AppRoutes.Base+AppRoutes.ScheduleAdd},
            ]},
        {label: "Пользователь", items: [
                {isActive: getItemPath(AppRoutes.Logout), name: 'Выйти', link: AppRoutes.Base+AppRoutes.Logout},
            ]},
    ];

    return (<DefaultMenu groups={groups} styles={styles}/>)
}