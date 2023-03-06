import React, { useState } from 'react'
import DefaultMenu, {IDefaultMenuGroup, IDefaultMenuType} from "../../../components/DefaultMenu";
import {Link} from "react-router-dom";

export function MainMenu(): JSX.Element {
    const styles = {
        height: '98vh',
    };

    const groups : IDefaultMenuGroup[] = [
        {label: "Тест 1", items: [
                {isActive: true, name: 'Кнопка 1', link: ''},
                {isActive: false, name: 'Кнопка 2', link: ''},
                {isActive: false, name: 'Кнопка 3', link: ''},
                {isActive: false, name: 'Кнопка 4', link: ''},
            ]},
        {label: "Тест 2", items: [
                {isActive: false, name: 'Кнопка 1', link: ''},
                {isActive: false, name: 'Кнопка 2', link: ''},
                {isActive: false, name: 'Кнопка 3', link: ''},
                {isActive: false, name: 'Кнопка 4', link: ''},
            ]},
        {label: "Тест 3", items: [
                {isActive: false, name: 'Кнопка 1', link: ''},
                {isActive: false, name: 'Кнопка 2', link: ''},
                {isActive: false, name: 'Кнопка 3', link: ''},
                {isActive: false, name: 'Кнопка 4', link: ''},
            ]},
    ];

    return (
        <DefaultMenu groups={groups} styles={styles}/>
    )
}