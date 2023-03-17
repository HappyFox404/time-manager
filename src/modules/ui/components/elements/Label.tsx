import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";

export function Label({className, style, children} : ICommonUI) : JSX.Element {
    return <label className={JoinClasses('label', className ?? '')} style={style}>{children}</label>
}