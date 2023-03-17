import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";
import {BaseElementColor} from "../../models/Colors";
import {useState} from "react";

export enum InputSize{
    Small = 'is-small',
    Normal = 'is-normal',
    Medium = 'is-medium',
    Large = 'is-large'
}

export enum InputTextareaType {
    IsText = 'text',
    IsPassword = 'password',
    isEmail = 'email',
    isTel = 'tel'
}

export interface IInputTextareaType extends ICommonUI {
    color?: BaseElementColor;
    size?: InputSize;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    placeholder?:string;
    name?:string;
    value?:string;
    rows?:number;
    isRounded?: boolean;
    isHovered?: boolean;
    isFocused?: boolean;
    isLoading?: boolean;
    isDisabled?:boolean;
    isReadonly?:boolean;
    handleChange?: (value: string) => void;
}

export function Textarea({style, className, placeholder, value, color, rows, size, name, leftIcon, rightIcon, handleChange, isRounded = false,
                          isHovered = false, isFocused = false, isLoading = false, isDisabled = false, isReadonly = false} : IInputTextareaType) : JSX.Element {
    const [inputValue, setInputValue] = useState<string>(value ?? '');

    function Change(event : React.ChangeEvent<HTMLTextAreaElement>){
        setInputValue(event.target.value);
        if(handleChange)
            handleChange(event.target.value);
    }

    return <div className={JoinClasses('control', size ?? '', (isLoading) ? 'is-loading' : '',
        (leftIcon !== undefined) ? 'has-icons-left' : '', (rightIcon !== undefined) ? 'has-icons-right' : '')}>
        <textarea name={name} style={style} rows={rows ?? 4}
                  className={JoinClasses('input', className ?? '', color ?? '',
                      (isRounded) ? 'is-rounded' : '', (isHovered) ? 'is-hovered' : '',
                      (isFocused) ? 'is-hovered' : '')}
                  placeholder={placeholder} disabled={isDisabled} readOnly={isReadonly}
                  onChange={(event) => Change(event)} value={inputValue}></textarea>
        {leftIcon}
        {rightIcon}
    </div>
}