import React from 'react'
import { SuperTouchable, SuperView, Colors, SuperText } from '../components'

export const Button: React.FC<ButtonType> = ({ onPress, catagory = 'default', word, width = 327, position }) => {

    const DefaultButton = () => {
        return (
            <SuperView justifyContent='center' alignItems='center' radius={10} color={Colors['orange']} flex={1}>
                <SuperText color={Colors['white']} fontSize={16}>{word}</SuperText>
            </SuperView>
        )
    }

    const GhostButton = () => {
        return (
            <SuperView justifyContent='center' alignItems='center' radius={10} borderColor={Colors['orange']} borderWidth={1} color={Colors['white']} flex={1}>
                <SuperText color={Colors['orange']} fontSize={16}>{word}</SuperText>
            </SuperView>
        )
    }

    const ReveseGhostButton = () => {
        return (
            <SuperView justifyContent='center' alignItems='center' radius={10} borderColor={Colors['white']} borderWidth={1} color={Colors['orange']} flex={1}>
                <SuperText color={Colors['white']} fontSize={16}>{word}</SuperText>
            </SuperView>
        )
    }

    return (
        <SuperTouchable width={width} height={56} onPress={onPress} position={position}>
            {catagory === 'default' && <DefaultButton />}
            {catagory === 'ghost' && <GhostButton />}
            {catagory === 'reverse-ghost' && <ReveseGhostButton />}
        </SuperTouchable>
    )
}

type ButtonType = {
    onPress?: Function,
    width?: number | string,
    catagory?: 'default' | 'ghost' | 'reverse-ghost',
    word?: string,
    position?: 'relative' | 'absolute',
}