import {ICommonUI} from "../../../models/ICommonUI";
import {JoinClasses} from "../../../helpers/UIHelper";

export function MessageHeader({className, style, children} : ICommonUI) : JSX.Element {
    return <div style={style} className={JoinClasses('message-header', className ?? '')}>
        { children }
    </div>
}