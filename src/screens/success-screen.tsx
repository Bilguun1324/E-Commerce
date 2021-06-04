import React from 'react';
import { SuperView, SuperText, Button, Colors, CorrectSvg, SuperStack, SuperSpace } from '../components';

export const SuccessScreen: React.FC<any> = ({ navigation, route }) => {
    const { text } = route.params;

    return (
        <SuperView flex={1} color={Colors['white']}>
            <SuperStack space={56}>
                <SuperView width={164} height={164} color={Colors['lightgreen']} radius={82}>
                    <SuperView width={100} height={100} color={Colors['green']} radius={50}>
                        <CorrectSvg />
                    </SuperView>
                </SuperView>
                <SuperView>
                    <SuperText color={Colors['lightblack']} fontSize={32}>Congrats!!!</SuperText>
                    <SuperSpace mt={20}>
                        <SuperText color={Colors['lightblack']} fontSize={18} width={327} textAlign='center'>{text}</SuperText>
                    </SuperSpace>
                </SuperView>
                <Button word='Continue' catagory='ghost' onPress={() => navigation.navigate('HomeScreen')}/>
            </SuperStack>
        </SuperView>
    )
}