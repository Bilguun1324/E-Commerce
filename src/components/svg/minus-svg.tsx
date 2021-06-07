import * as React from "react"
import { SuperView } from '../../components';
import { SvgType } from './types'

export const MinusSvg: React.FC<SvgType> = ({ color = 'black', height = 2, width = 13 }) => {
    return (
        <SuperView width={width} height={height} color={color}/>
    )
}