import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";
import {AdditionalElementColor, BaseElementColor} from "../../models/Colors";

export enum ButtonType {
    IsLink,
    IsButton,
    IsSubmit,
    IsReset,
    IsClickableContainer
}

export enum ButtonColor {
    Text = 'is-text',
    Ghost = 'is-ghost'
}

export enum ButtonSize {
    Small = 'is-small',
    Normal = 'is-normal',
    Medium = 'is-medium',
    Large = 'is-large',
}

export interface IButtonType extends ICommonUI{
    text?: string;
    color?: BaseElementColor | AdditionalElementColor | ButtonColor;
    type?: ButtonType;
    size?: ButtonSize;
    isFullwidth?: boolean;
    isResponsive?:boolean;
    isOutlined?:boolean;
    isInverted?:boolean;
    isRounded?:boolean;
    isStatic?:boolean;
    handleClick(): void;
}

export function Button({className, style, children, color, size, text, handleClick, type = ButtonType.IsLink,
                           isFullwidth = false, isResponsive = false, isOutlined = false,
                           isInverted = false, isRounded = false, isStatic = false} : IButtonType) : JSX.Element {
    function needButtonElement() : JSX.Element {
        const classes = JoinClasses('button', className ?? '', color ?? '', size ?? '',
            (isFullwidth === true) ? 'is-fullwidth' : '', (isResponsive === true) ? 'is-responsive' : '',
            (isOutlined === true) ? 'is-outlined' : '', (isInverted === true) ? 'is-inverted' : '',
            (isRounded === true) ? 'is-rounded' : '', (isStatic === true) ? 'is-static' : '');

        if(type === ButtonType.IsButton){
            return <button style={style} className={classes} onClick={() => {if(handleClick) handleClick();}}>{children ?? text}</button>;
        }
        if(type === ButtonType.IsSubmit){
            return <input style={style} className={classes} type='submit' onClick={() => {if(handleClick) handleClick();}} value={text ?? ''}/>;
        }
        if(type === ButtonType.IsReset){
            return <input style={style} className={classes} type='reset' onClick={() => {if(handleClick) handleClick();}} value={text ?? ''}/>;
        }
        if(type === ButtonType.IsClickableContainer){
            return <div style={style} className={classes} onClick={() => {if(handleClick) handleClick();}}>{children ?? text}</div>;
        }

        return <a style={style} className={classes} onClick={() => {if(handleClick) handleClick();}}>{children ?? text}</a>;
    }

    return (needButtonElement());
}