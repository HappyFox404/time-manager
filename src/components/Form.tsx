import React from 'react'
import { IFormSubmit, IFormValidate } from '../core/FormInterfaces'

export interface IFormType {
    styles?: any;
    classes?: string[];
    children: JSX.Element | JSX.Element[];
}

export default function Form({children, styles = null, classes = []}: IFormType) : JSX.Element {
  return (
    <form style={styles} className={classes.join(' ')}>
        {children}
    </form>
  )
}