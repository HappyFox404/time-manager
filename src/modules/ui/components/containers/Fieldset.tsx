import {ICommonUI} from "../../models/ICommonUI";

export interface IFieldsetType extends ICommonUI{
    isDisabled?:boolean;
}

export function Fieldset({className, style, children, isDisabled = false} : IFieldsetType) : JSX.Element {
    return <fieldset disabled={isDisabled} className={className} style={style}>
        {children}
    </fieldset>
}