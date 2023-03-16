import {ICommonUI} from "../../../models/ICommonUI";
import {JoinClasses} from "../../../helpers/UIHelper";

export function MessageBody({className, style, children} : ICommonUI) : JSX.Element {
    return <div style={style} className={JoinClasses('message-body', className ?? '')}>
        { children }
    </div>
}