import React from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export interface IFormValidate {
  isValid: (state: boolean) => boolean;
}

export interface IFormType extends IBaseComponent {
  handleSubmit?: (event: React.SyntheticEvent) => void;
}

export default function Form({children, handleSubmit, styles = null, classes = []}: IFormType) : JSX.Element {
  return (
    <form style={styles} 
    className={finalizeClassName([],classes)}
    onSubmit={handleSubmit}>
        {children}
    </form>
  )
}