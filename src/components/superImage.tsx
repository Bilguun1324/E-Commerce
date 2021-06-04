import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export const SuperImage: React.FC<SuperImageType> = ({ height, width, children, source, radius, overflow, flex }) => {
    const styles = StyleSheet.create({
        container: {
            height,
            width,
            flex,
            overflow,
            borderRadius: radius,
        }
    })
    return (
        <ImageBackground style={styles.container} source={source}>
            {children}
        </ImageBackground>
    )
}

type SuperImageType = {
    height?: string | number,
    width?: string | number,
    radius?: number,
    flex?: number,
    overflow?: 'hidden' | 'scroll' | 'visible';
    source: any,
}