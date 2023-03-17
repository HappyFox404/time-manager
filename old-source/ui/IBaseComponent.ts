export interface IBaseComponent{
    styles?: any;
    classes?: string[];
    tooltip?: string;
    children?: JSX.Element | JSX.Element[];
}

export function finalizeClassName(base : string[] | null, classes: string[] | null | undefined) : string {
    if(classes && base) return [...base, ...classes].join(' ');
    if(base) return base.join(' ');
    if(classes) return classes.join(' ');
    return '';
}