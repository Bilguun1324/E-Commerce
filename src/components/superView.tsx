import React from 'react';
import { View, StyleSheet } from 'react-native';

export const SuperView: React.FC<SuperViewType> = ({ height, radius, top, bottom, left, right, width, flex, borderColor, borderWidth, opacity = 1, position, display = 'flex', flexDirection = 'column', flexWrap = 'nowrap', justifyContent = 'center', alignItems = 'center', color = 'transparent', zIndex = 0, children }) => {
    const styles = StyleSheet.create({
        container: {
            flex,
            height,
            width,
            opacity,
            flexDirection,
            flexWrap,
            justifyContent,
            alignItems,
            backgroundColor: color,
            zIndex,
            position,
            display,
            borderRadius: radius,
            borderColor,
            borderWidth,
            top,
            bottom,
            left,
            right,
        }
    })
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

type SuperViewType = {
    flex? : number,
    height?: number | string,
    width?: number | string,
    opacity?: number,
    top?: number | string,
    bottom?: number | string,
    left?: number | string,
    right?: number | string,
    display?: 'flex' | 'none',
    position?: 'absolute' | 'relative',
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    alignItems?: 'flex-start' | 'flex-end' | 'center',
    color?: string,
    zIndex?: number,
    children?: any,
    radius?: number,
    borderColor?: string,
    borderWidth?: number,
}