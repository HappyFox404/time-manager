import {ICommonUI} from "../../models/ICommonUI";

export interface ITemplateType extends ICommonUI {

}

export function Template({className, style, children} : ITemplateType) : JSX.Element {
    return <div></div>
}