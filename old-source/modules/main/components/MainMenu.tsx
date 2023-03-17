import React, { useState } from 'react'
import DefaultMenu, {IDefaultMenuGroup, IDefaultMenuType} from "../../../components/DefaultMenu";
import {Link, useLocation} from "react-router-dom";
import AppRoutes from "../../../../src/constants/AppRoutes";

export function MainMenu(): JSX.Element {
    const location = useLocation();
    const styles = {
        height: '98vh'
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
                {isActive: getItemPath(AppRoutes.ScheduleView), name: 'Работа с расписанием', link: AppRoutes.Base+AppRoutes.ScheduleView},
            ]},
        {label: "Пользователь", items: [
                {isActive: getItemPath(AppRoutes.Logout), name: 'Выйти', link: AppRoutes.Base+AppRoutes.Logout},
            ]},
    ];

    return (<DefaultMenu groups={groups} styles={styles} classes={['box', 'box-app', 'm-2']} />)
}