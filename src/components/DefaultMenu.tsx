import React, {Fragment, useState} from 'react'
import Label from '../ui/Label';
import Field from '../ui/Field';
import Control from '../ui/Control';
import Input from '../ui/Input';
import Menu from "../ui/Menu";
import MenuLabel from "../ui/MenuLabel";
import MenuItem from "../ui/MenuItem";
import {Link, LinkProps} from "react-router-dom";
import MenuList from "../ui/MenuList";
import {IBaseComponent} from "../ui/IBaseComponent";

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
    return (
        <Menu classes={['box', 'm-1', 'has-background-white-ter']} styles={styles}>
            {
                groups && groups.map((group, groupId) => <Fragment key={`group.${groupId}`}>
                    <MenuLabel key={`group.label.${groupId}`} title={group.label}/>
                    {
                        <MenuList key={`group.list.${groupId}`}>
                            {
                                group.items && group.items.map((item, itemId) => <MenuItem key={`item.${groupId}.${itemId}`}>
                                    <Link className={[(item.isActive) ? 'is-active' : ''].join(' ')} to={item.link ?? '#'}>{item.name}</Link>
                                </MenuItem>)
                            }
                        </MenuList>
                    }
                </Fragment>)
            }
        </Menu>
    )
}