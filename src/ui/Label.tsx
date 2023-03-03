import { IBaseComponent, finalizeClassName } from './IBaseComponent';

export interface ILabelType extends IBaseComponent {
    title: string;
}

export default function Label({ title, classes, styles }: ILabelType): JSX.Element {
    return (
        <label className={finalizeClassName(['label'], classes)} style={styles}>
            { title }
        </label>
    )
}