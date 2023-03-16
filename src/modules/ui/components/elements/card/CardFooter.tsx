import {ICommonUI} from "../../../models/ICommonUI";
import {JoinClasses} from "../../../helpers/UIHelper";
import {Button, ButtonType} from "../interactive/Button";

export interface ICardFooterItem{
    content: JSX.Element | string;
    handleClick?: () => void;
}

export interface ICardFooterType extends ICommonUI {
    items: ICardFooterItem[];
}

export function CardFooter({className, style, items} : ICardFooterType) : JSX.Element {
    return <div style={style} className={JoinClasses('card-content', className ?? '')}>
        {items.map(item => <Button type={ButtonType.IsClickableContainer} handleClick={() => {if(item.handleClick) item.handleClick();}}>{item.content}</Button>)}
    </div>
}