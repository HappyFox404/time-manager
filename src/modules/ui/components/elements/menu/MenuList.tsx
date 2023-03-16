import {ICommonUI} from "../../../models/ICommonUI";
import {JoinClasses} from "../../../helpers/UIHelper";
import {Button, ButtonType} from "../interactive/Button";

export interface IMenuListItemType {
    content: JSX.Element;
    handleClick?: () => void;
    isActive?: boolean;
}

export interface IMenuListType extends ICommonUI{
    items: IMenuListItemType[];
}

export function MenuList({className, style, items} : IMenuListType) : JSX.Element {
    return <ul style={style} className={JoinClasses('menu-label', className ?? '')}>
        {
            items.map(item => <li className={(item.isActive ?? false) ? 'is-active' : ''}><Button handleClick={() => {if(item.handleClick) item.handleClick();}} type={ButtonType.IsClickableContainer}>
                {item.content}
            </Button></li>)
        }
    </ul>
}