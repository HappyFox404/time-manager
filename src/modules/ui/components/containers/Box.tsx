import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";

export function Box({className, style, children} : ICommonUI) : JSX.Element {
    return <div style={style} className={JoinClasses('box', className ?? '')}>{children}</div>
}