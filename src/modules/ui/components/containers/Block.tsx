import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";

export function Block({className, style, children} : ICommonUI) : JSX.Element {
    return <div style={style} className={JoinClasses('block', className ?? '')}>{children}</div>
}