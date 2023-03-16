import React from "react";
import {IIconType} from "./Icon";
export function IconText({className, style, icon, iconSize, children, color} : IIconType) : JSX.Element {
    return <span style={style} className='icon-text'>
        <IconText className={className} icon={icon} iconSize={iconSize} color={color}/>
        { children }
    </span>
}