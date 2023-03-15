import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";

export enum ButtonsSize{
    Normal = 'are-normal',
    Medium = 'are-medium',
    Large = 'are-large',
}

export interface IButtonsType extends ICommonUI {
    size?: ButtonsSize;
}

export function Tags({className, style, children, size} : IButtonsType) : JSX.Element {
    return <div style={style} className={JoinClasses('buttons', className ?? '', size ?? '')}>{children}</div>
}