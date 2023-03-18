import {ICommonUI} from "../../../models/ICommonUI";
import {JoinClasses} from "../../../helpers/UIHelper";
import {Button, ButtonType} from "../../interactive/Button";

export interface IMenuListItemType {
    content: JSX.Element | string;
    isActive?: boolean;
}

export interface IMenuListType extends ICommonUI{
    items: IMenuListItemType[];
}

export function MenuList({className, style, items} : IMenuListType) : JSX.Element {
    return <ul style={style} className={JoinClasses('menu-list', className ?? '')}>
        {
            items.map((item, index) => <li key={index} className={(item.isActive ?? false) ? 'is-active' : ''}>{item.content}</li>)
        }
    </ul>
}