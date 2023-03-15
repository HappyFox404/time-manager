import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";
import {BaseElementColor} from "../../models/Colors";

export interface INotificationType extends ICommonUI{
    color? : BaseElementColor;
    isLightColor?: boolean;
}

export function Notification({className, style, children, color, isLightColor = false} : INotificationType) : JSX.Element {
    return <div style={style} className={JoinClasses('notification', className ?? '', color ?? '', (isLightColor === true) ? 'is-light' : '')}>{children}</div>
}