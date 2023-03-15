import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";
import {TagsSize} from "../containers/Tags";
import {AdditionalElementColor, BaseElementColor} from "../../models/Colors";

export enum TagSize{
    Normal = 'is-normal',
    Medium = 'is-medium',
    Large = 'is-large',
}

export interface ITagType extends ICommonUI {
    color?: BaseElementColor | AdditionalElementColor;
    size?: TagsSize;
    isLightColor?: boolean;
    isRounded?:boolean;
}

export function Tag({className, style, children, color, size, isLightColor = false, isRounded = false} : ITagType) : JSX.Element {
    return <span style={style} className={JoinClasses('tag', className ?? '', color ?? '', size ?? '',
        (isLightColor === true) ? 'is-light' : '', (isRounded === true) ? 'is-rounded' : '')}>{children}</span>
}