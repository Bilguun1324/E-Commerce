import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Colors } from './colors';

export const SuperInput: React.FC<SuperInputType> = ({ height = 56, width = 327, borderColor, value, placeholder, borderWidth, color = Colors['orange'], backgroundColor = Colors['grey'], borderRadius = 10, secureTextEntry, keyboardType, children, onChange }) => {
    const styles = StyleSheet.create({
        container: {
            height,
            width,
            borderColor,
            borderWidth,
            backgroundColor,
            borderRadius,
            color,
        }
    })

    return (
        <TextInput style={styles.container} placeholder={placeholder} onChangeText={(e) => onChange(e)} placeholderTextColor={color} secureTextEntry={secureTextEntry} keyboardType={keyboardType} value={value}>
            {children}
        </TextInput>
    )
}

type SuperInputType = {
    height?: string | number,
    width?: string | number,
    borderWidth?: number,
    borderColor?: string,
    borderRadius?: number,
    backgroundColor?: string,
    color?: string,
    placeholder?: string,
    children?: any,
    onChange: Function,
    secureTextEntry?: boolean,
    value?: string,
    keyboardType?: 'numeric' | 'default' | 'email-address',
}