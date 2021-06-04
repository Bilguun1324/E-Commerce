import React, { useContext } from 'react';
import { SuperView, SuperText, Colors, Card, SuperSpace, Button } from '../components';
import { ScrollView } from 'react-native';
import { BaskterContext } from '../provider';
import { useAuth } from '../hooks/auth';
import { useCol, useDoc } from '../hooks/firebase';
import { useNavigation } from '@react-navigation/native';

export const BasketScreen = () => {
    const { basket } = useContext(BaskterContext);
    const navigation = useNavigation();
    const { col } = useCol('/products/');
    const { user } = useAuth();
    const { uid }: any = user || {};
    const { updateDoc } = useDoc(`users/${uid}`)

    const buy = () => {
        updateDoc({ boughtHistory: basket });
        navigation.navigate('SuccessScreen', { text: 'you have successfully bought the product!!!' })
    }

    return (
        <SuperView flex={1}>
            <ScrollView>
                <SuperSpace mt='30%' mh={30}>
                    <SuperView width='100%' flexDirection='row' flexWrap='wrap' justifyContent='flex-start'>
                        <SuperText color={Colors['orange']} fontSize={20} textAlign='center' width='100%'>This guys are in your basket: </SuperText>
                        {basket.map((basketProduct: any) => {
                            return col.map((product: any, index: number) =>
                                basketProduct === product.id ?
                                    <SuperView width='50%' height={200} key={index}>
                                        <Card name={product.data().productname} price={product.data().productprice} id={product.id} showIcon={false} />
                                    </SuperView> : <SuperView key={index} />
                            )
                        })}
                    </SuperView>
                </SuperSpace>
            </ScrollView>
            <SuperView bottom={20} position='absolute'>
                <Button word='Энд дарж худалдан аваарай.' onPress={buy} />
            </SuperView>
        </SuperView>
    )
}