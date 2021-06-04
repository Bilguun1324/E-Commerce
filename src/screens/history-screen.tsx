import React from 'react';
import { SuperView, SuperText, Colors, Card, SuperSpace, Button } from '../components';
import { ScrollView } from 'react-native';
import { useAuth } from '../hooks/auth';
import { useDoc, useCol } from '../hooks/firebase';
import { useNavigation } from '@react-navigation/native';

export const HistoryScreen = () => {
    const { user, signOut } = useAuth();
    const { uid }: any = user || {};
    const { doc } = useDoc(`users/${uid}`);
    const { col } = useCol('products');
    const navigation = useNavigation();

    const logOut = () => {
        signOut();
        navigation.navigate("SignInUpScreen")
    }
    return (
        <SuperView flex={1}>
            <ScrollView>
                <SuperSpace mt='30%' mh={30}>
                    <SuperView width='100%' flexDirection='row' flexWrap='wrap' justifyContent='flex-start'>
                        <SuperText color={Colors['orange']} fontSize={20} textAlign='center' width='100%'>Сүүлд хийгдсэн худалдан авалтууд: </SuperText>
                        {
                            doc && col && doc.boughtHistory.map((boughtProduct: any) => {
                                return col.map((product: any, index: number) => {
                                    return boughtProduct === product.id ?
                                        <SuperView width='50%' height={200} key={index}>
                                            <Card name={product.data().productname} price={product.data().productprice} id={product.id} showIcon={false} />
                                        </SuperView> : <SuperView key={index} />
                                })
                            })
                        }
                    </SuperView>
                </SuperSpace>
            </ScrollView>
            <SuperView position='absolute' bottom={20}>
                <Button word='log out->' onPress={logOut}/>
            </SuperView>
        </SuperView>
    )
}