import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export const SuperTouchable: React.FC<SuperViewType> = ({ height, width, opacity = 1, position, flex, onPress, color = 'transparent', zIndex = 0, children }) => {
    const styles = StyleSheet.create({
        container: {
            flex,
            height,
            width,
            opacity,
            backgroundColor: color,
            zIndex,
            position,
        }
    })
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

type SuperViewType = {
    flex?: number,
    height?: number | string,
    width?: number | string,
    position?: 'absolute' | 'relative',
    opacity?: number,
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    alignItems?: 'flex-start' | 'flex-end' | 'center',
    color?: string,
    zIndex?: number,
    children?: any,
    onPress?: Function,
}