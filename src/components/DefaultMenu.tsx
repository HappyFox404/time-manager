import React, { useState } from 'react'
import Label from '../ui/Label';
import Field from '../ui/Field';
import Control from '../ui/Control';
import Input from '../ui/Input';
import Menu from "../ui/Menu";
import MenuLabel from "../ui/MenuLabel";
import MenuItem from "../ui/MenuItem";
import {Link, LinkProps} from "react-router-dom";
import MenuList from "../ui/MenuList";

export interface IDefaultMenuType {
    groups: IDefaultMenuGroup[];
    styles?: any;
}

export interface IDefaultMenuGroup {
    label: string;
    items: IDefaultMenuItem[];
}

export interface IDefaultMenuItem {
    isActive: boolean;
    name: string;
    handleClick?: () => void;
    link?:  string;
}

export default function DefaultMenu({ groups, styles }: IDefaultMenuType): JSX.Element {
    const createGroup = (group : IDefaultMenuGroup) : JSX.Element => <>
        <MenuLabel title={group.label}/>
        {createMenuList(group.items)}
    </>;

    const createMenuList = (items: IDefaultMenuItem[]) : JSX.Element => <MenuList>{ createItems(items) }</MenuList>;

    const createItems = (items: IDefaultMenuItem[]) : JSX.Element[] => items && items.map(item => <MenuItem>
        <Link className={[(item.isActive) ? 'is-active' : ''].join(' ')} to={item.link ?? '#'}>{item.name}</Link>
    </MenuItem>);

    return (
        <Menu classes={['box', 'm-1', 'has-background-white-ter']} styles={styles}>
            {groups && groups.map(item => createGroup(item))}
        </Menu>
    )
}