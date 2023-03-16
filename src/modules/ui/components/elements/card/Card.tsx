import {ICommonUI} from "../../../models/ICommonUI";
import {JoinClasses} from "../../../helpers/UIHelper";

export function Card({className, style, children} : ICommonUI) : JSX.Element {
    return <div style={style} className={JoinClasses('card', className ?? '')}>{children}</div>
}