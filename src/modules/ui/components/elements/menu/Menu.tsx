import {ICommonUI} from "../../../models/ICommonUI";
import {JoinClasses} from "../../../helpers/UIHelper";

export function Menu({className, style, children} : ICommonUI) : JSX.Element {
    return <div style={style} className={JoinClasses('menu', className ?? '')}>{children}</div>
}