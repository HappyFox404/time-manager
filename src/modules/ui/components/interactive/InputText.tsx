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

export enum InputTextType {
    IsText = 'text',
    IsPassword = 'password',
    isEmail = 'email',
    isTel = 'tel',
    Date = 'date',
    DateTime = 'datetime'
}

export interface IInputTextType extends ICommonUI {
    color?: BaseElementColor;
    size?: InputSize;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    placeholder?:string;
    name?:string;
    value?:string;
    type?:InputTextType;
    isRounded?: boolean;
    isHovered?: boolean;
    isFocused?: boolean;
    isLoading?: boolean;
    isDisabled?:boolean;
    isReadonly?:boolean;
    handleChange?: (value: string) => void;
}

export function InputText({style, className, placeholder, value, color, size, name, leftIcon, rightIcon, handleChange, type=InputTextType.IsText, isRounded = false,
                          isHovered = false, isFocused = false, isLoading = false, isDisabled = false, isReadonly = false} : IInputTextType) : JSX.Element {
    const [inputValue, setInputValue] = useState<string>(value ?? '');

    function Change(event : React.ChangeEvent<HTMLInputElement>) : void{
        setInputValue(event.target.value);
        if(handleChange)
            handleChange(event.target.value);
    }

    return <div className={JoinClasses('control', size ?? '', (isLoading) ? 'is-loading' : '',
        (leftIcon !== undefined) ? 'has-icons-left' : '', (rightIcon !== undefined) ? 'has-icons-right' : '')}>
        <input type={type} name={name}
                  style={style}
                  className={JoinClasses('input', className ?? '', color ?? '',
                      (isRounded) ? 'is-rounded' : '', (isHovered) ? 'is-hovered' : '',
                      (isFocused) ? 'is-hovered' : '')}
                  placeholder={placeholder} disabled={isDisabled} readOnly={isReadonly}
                  onChange={(event) => Change(event)} value={inputValue}/>
        {leftIcon}
        {rightIcon}
    </div>
}