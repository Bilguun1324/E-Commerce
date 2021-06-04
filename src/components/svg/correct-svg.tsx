import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgType } from './types'

export const CorrectSvg: React.FC<SvgType> = ({ color = 'white', height = 42, width = 42 }) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 42 42" fill="none">
            <Path
                d="M39.04 7.604l-2.398-1.93c-1.182-.95-1.869-.94-2.88.31l-17.43 21.51-8.11-6.74c-1.12-.94-1.82-.89-2.74.26l-1.85 2.41c-.94 1.183-.82 1.854.29 2.78l11.56 9.563c1.19 1 1.86.897 2.78-.222l21.08-25.061c.99-1.19.93-1.901-.302-2.88z"
                fill={color}
            />
        </Svg>
    )
}