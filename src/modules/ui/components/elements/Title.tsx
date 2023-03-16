import React from "react";
import {ICommonUI} from "../../models/ICommonUI";
import {JoinClasses} from "../../helpers/UIHelper";
import {BaseElementColor} from "../../models/Colors";

export enum TitleSizeType {
    IS1 = 'is-1',
    IS2 = 'is-2',
    IS3 = 'is-3',
    IS4 = 'is-4',
    IS5 = 'is-5',
    IS6 = 'is-6',
}

export interface ITitleType extends ICommonUI {
    size?: TitleSizeType;
    text: string;
    isSubtitle?: boolean;
    isSpaced?: boolean;
}
export function Title({className, style, text, size = TitleSizeType.IS1, isSubtitle = false, isSpaced = false} : ITitleType) : JSX.Element {
    return <span style={style} className={JoinClasses((isSubtitle) ? 'subtitle' : 'title', className ?? '', size ?? '', (isSpaced) ? 'is-spaced' : '')}>{text}</span>
}