import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgType } from './types'

export const HistorySvg: React.FC<SvgType> = ({ color = 'black', height = 25, width = 25 }) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
            <Path
                d="M4.738 11.01l7.824 7.824 7.824-7.824a3.689 3.689 0 00-5.216-5.217l-2.608 2.608-2.607-2.607a3.688 3.688 0 00-5.217 5.216zm6.955-6.956l.87.869.868-.87a6.147 6.147 0 118.694 8.694l-8.692 8.693a1.23 1.23 0 01-1.74 0L3 12.748a6.148 6.148 0 118.692-8.693l.001-.001z"
                fill={color}
            />
        </Svg>
    )
}