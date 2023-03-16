import {ICommonUI} from "../../../models/ICommonUI";
import {JoinClasses} from "../../../helpers/UIHelper";
import {Button, ButtonType} from "../interactive/Button";

export interface ICardHeaderType extends ICommonUI {
    title: JSX.Element | string;
    icon?: JSX.Element;
    handleClick?: () => void;
}

export function CardHeader({className, style, title, icon, handleClick} : ICardHeaderType) : JSX.Element {
    return <header style={style} className={JoinClasses('card-header', className ?? '')}>
        <p className='card-header-title'>
            {title}
        </p>
        { icon && <Button handleClick={() => {if(handleClick) handleClick();}} type={ButtonType.IsClickableContainer}>{icon}</Button> }
    </header>
}