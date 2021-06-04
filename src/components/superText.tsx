import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const SuperText: React.FC<SuperTextType> = ({ textAlign, color, height, width, fontSize, bold = false, numberOfLines, children }) => {
    const styles = StyleSheet.create({
        design: {
            textAlign,
            color,
            width,
            height,
            fontSize,
            fontWeight: bold ? '700' : 'bold',
        }
    })
    return (
        <Text style={styles.design} numberOfLines={numberOfLines}>
            {children}
        </Text>
    )
}

type SuperTextType = {
    textAlign?: 'center' | 'left' | 'right',
    color?: string,
    children?: any,
    height?: string | number,
    width?: string | number,
    fontSize?: number,
    bold?: boolean,
    numberOfLines?: number,
}