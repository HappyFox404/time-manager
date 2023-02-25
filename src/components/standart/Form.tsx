import React from 'react'
import IBaseComponent from '../../core/interfaces/IBaseComponent';

export interface IFormValidate {
  isValid: (state: boolean) => boolean;
}

export interface IFormType extends IBaseComponent {
  handleSubmit?: (event: React.SyntheticEvent) => void;
}

export default function Form({children, handleSubmit, styles = null, classes = []}: IFormType) : JSX.Element {
  const finalizeClasses = () : string => {
    if(classes) return classes.join(' ');
    return '';
  }
  
  return (
    <form style={styles} 
    className={finalizeClasses()}
    onSubmit={handleSubmit}>
        {children}
    </form>
  )
}