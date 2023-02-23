import React from 'react'
import IBaseComponent from '../../core/interfaces/IBaseComponent';

export interface IFormValidate {
  isValid: (state: boolean) => boolean;
}

export interface IFormSubmit {
  submit: () => void;
}

export interface IFormType extends IBaseComponent {}

export default function Form({children, styles = null, classes = []}: IFormType) : JSX.Element {
  return (
    <form style={styles} className={classes.join(' ')}>
        {children}
    </form>
  )
}