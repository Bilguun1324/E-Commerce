import React from 'react';
import { View, StyleSheet } from 'react-native';

export const SuperSpace: React.FC<SuperViewType> = ({ children, m, mb, mt, mh, ml, mr, mv, position }) => {
    const styles = StyleSheet.create({
        container: {
            margin: m,
            marginBottom: mb,
            marginTop: mt,
            marginLeft: ml,
            marginRight: mr,
            marginHorizontal: mh,
            marginVertical: mv,
            position,
        }
    })
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

type SuperViewType = {
    position?: 'absolute' | 'relative',
    children?: any,
    m?: number | string,
    mt?: number | string,
    mb?: number | string,
    mr?: number | string,
    ml?: number | string,
    mh?: number | string,
    mv?: number | string,
}