import {ICommonUI} from "../../../models/ICommonUI";
import {JoinClasses} from "../../../helpers/UIHelper";

export function MenuLabel({className, style, children} : ICommonUI) : JSX.Element {
    return <div style={style} className={JoinClasses('menu-label', className ?? '')}>{children}</div>
}