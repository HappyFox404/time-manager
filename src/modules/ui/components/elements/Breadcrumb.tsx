import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";

export enum BreadcrumbSeparatorType {
    Arrow = 'has-arrow-separator',
    Bullet = 'has-bullet-separator',
    Dot = 'has-dot-separator',
    Succeeds = 'has-succeeds-separator'
}

export enum BreadcrumbSizeType {
    Small = 'is-small',
    Medium = 'is-medium',
    Large = 'is-large'
}

export interface IBreadcrumbItemType{
    element : JSX.Element | string;
    isActive: boolean;
}
export interface IBreadcrumbType extends ICommonUI {
    items: IBreadcrumbItemType[];
    separatorType?: BreadcrumbSeparatorType;
    size?: BreadcrumbSizeType;
    isCentered?:boolean;
    isRight?:boolean;
}

export function Breadcrumb({className, style, items, separatorType, size, isCentered = false, isRight = false} : IBreadcrumbType) : JSX.Element {
    return <nav style={style} className={JoinClasses('breadcrumb', className ?? '', separatorType ?? '', size ?? '',
        (isCentered) ? 'is-centered' : '', (isRight) ? 'is-right' : '')} aria-label='breadcrumbs'>
        <ul>
        {items.map(item => <li className={(item.isActive) ? 'is-active' : ''}>{item.element}</li>)}
        </ul>
    </nav>
}