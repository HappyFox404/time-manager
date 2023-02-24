import React from 'react'
import IBaseComponent from '../../core/interfaces/IBaseComponent';

export interface IFormValidate {
  isValid: (state: boolean) => boolean;
}

export interface IFormType extends IBaseComponent {
  callbackSubmit?: (event: React.SyntheticEvent) => void;
}

export default function Form({children, callbackSubmit, styles = null, classes = []}: IFormType) : JSX.Element {
  const finalizeClasses = () : string => {
    if(classes) return classes.join(' ');
    return '';
  }

  const handleSumbit = (event : React.SyntheticEvent) =>{
    event.preventDefault();
    if(callbackSubmit)
      callbackSubmit(event);
  }
  
  return (
    <form style={styles} 
    className={finalizeClasses()}
    onSubmit={(event) => {handleSumbit(event);}}>
        {children}
    </form>
  )
}