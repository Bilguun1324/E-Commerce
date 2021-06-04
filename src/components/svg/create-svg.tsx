import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgType } from './types'

export const CreateSvg: React.FC<SvgType> = ({ color = 'black', height = 25, width = 25 }) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
            <Path
                d="M17.31 8.722c0 .376-.145.74-.414 1.002-.263.27-.627.42-1.003.42H10.23v5.662c0 .376-.15.74-.42 1.003-.263.263-.62.413-.996.413a1.423 1.423 0 01-1.423-1.416v-5.662H1.726A1.422 1.422 0 01.723 7.72a1.423 1.423 0 011.003-.414H7.39V1.644c0-.376.15-.74.42-1.002a1.403 1.403 0 011.999 0c.27.263.42.626.42 1.002v5.662h5.664c.376 0 .74.15 1.003.414.27.27.414.626.414 1.002z"
                fill={color}
            />
        </Svg>
    )
}