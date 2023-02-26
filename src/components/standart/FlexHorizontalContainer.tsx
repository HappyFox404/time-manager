import React from "react";
import IBaseComponent from "../../core/interfaces/IBaseComponent";

export default function FlexHorizontalContainer({children, styles, classes}: IBaseComponent) : JSX.Element{
    const finalizeClasses = () : string => {
        if(classes) return ['is-flex','is-flex-direction-row', ...classes].join(' ');
        return 'is-flex is-flex-direction-row';
    }
    
    return (
        <div className={finalizeClasses()} style={styles}>
            {children}
        </div>
    )
}