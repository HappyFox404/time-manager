import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";

export enum FieldAddonAlignType {
    Centered = 'has-addons-centered',
    Right = 'has-addons-right'
}

export enum FieldGroupAlignType {
    Centered = 'is-grouped-centered',
    Right = 'is-grouped-right'
}

export enum FieldLabelSizeType {
    Small = 'is-small',
    Medium = 'is-medium',
    Large = 'is-large'
}

export interface IFieldType extends ICommonUI{
    isHorizontal?: boolean;
    isLabel?: boolean;
    labelSize?: FieldLabelSizeType;
    isBody?: boolean;
    hasAddon?: boolean;
    addonAlign?: FieldAddonAlignType;
    isGrouped?:boolean;
    isGroupedMultiline?:boolean;
    groupAlign?: FieldGroupAlignType;
}

export function Field({style, className, children, addonAlign, groupAlign, labelSize, isHorizontal = false, isBody = false,
                          isLabel = false, hasAddon = false, isGrouped = false, isGroupedMultiline = false} : IFieldType) : JSX.Element {
    if(isBody || isLabel){
        return <div className={JoinClasses((isBody) ? 'field-body' : '',
            (isLabel) ? 'field-label' : '', className ?? '', labelSize ?? '')} style={style}>
            {children}
        </div>
    } else {
        return <div className={JoinClasses('field', (hasAddon) ? 'has-addons' : '',
            (isHorizontal) ? 'is-horizontal' : '',(isGrouped) ? 'is-grouped' : '',(isGroupedMultiline) ? 'is-grouped' : '',
            className ?? '', addonAlign ?? '', groupAlign ?? '')} style={style}>
            {children}
        </div>
    }
}