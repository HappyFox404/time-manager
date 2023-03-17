import React from 'react'
import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export interface INotification extends IBaseComponent{
    text : string;
}

export default function Notification({text, classes, styles}: INotification) : JSX.Element {
  return (<>
    {text && <div className={finalizeClassName(['notification'], classes)} style={styles}>{text}</div>}
    </>
  )
}