import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";

export enum TagsSize{
    Normal = 'are-normal',
    Medium = 'are-medium',
    Large = 'are-large',
}

export interface ITagsType extends ICommonUI {
    size?: TagsSize;
    hasAddons?: boolean;
}

export function Tags({className, style, children, size, hasAddons = false} : ITagsType) : JSX.Element {
    return <div style={style} className={JoinClasses('tags', className ?? '', size ?? '', (hasAddons === true) ? 'has-addons' : '')}>{children}</div>
}