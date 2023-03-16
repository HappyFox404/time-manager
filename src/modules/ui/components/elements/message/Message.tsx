import {ICommonUI} from "../../../models/ICommonUI";
import {JoinClasses} from "../../../helpers/UIHelper";
import {AdditionalElementColor, BaseElementColor} from "../../../models/Colors";

export enum MessageSizeType{
    Small = 'is-small',
    Medium = 'is-medium',
    Large = 'is-large'
}

export interface IMessageType extends ICommonUI {
    color?: BaseElementColor | AdditionalElementColor;
    size?: MessageSizeType;
    isLight?: boolean;
}

export function Message({className, style, children, color, size, isLight = false} : IMessageType) : JSX.Element {
    return <div style={style} className={JoinClasses('message', className ?? '', color ?? '', size ?? '', (isLight) ? 'is-light' : '')}>
        { children }
    </div>
}