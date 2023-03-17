import {ICommonUI} from "../../models/ICommonUI";
import {BaseElementColor} from "../../models/Colors";
import {JoinClasses} from "../../helpers/UIHelper";

export interface IHelpType extends ICommonUI {
    color?: BaseElementColor;
}

export function Help({className, style, children, color} : IHelpType) : JSX.Element {
    return <p className={JoinClasses('help', className ?? '', color ?? '')} style={style}>{children}</p>
}