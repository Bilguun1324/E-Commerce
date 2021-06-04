import React from 'react';
import { SuperView, SuperText, CouponCard, Card, Colors } from '../components';
import { FlatList } from 'react-native'
import { useCol } from '../hooks/firebase';
import { useQuery } from '@apollo/client';
import { REQUEST_COUPON } from '../queries';

export const HomeScreen = () => {
    const { col } = useCol('/products/')
    const { data } = useQuery(REQUEST_COUPON);

    return (
        <SuperView flex={1} justifyContent='flex-start'>
            <SuperView width='90%' top='10%'>
                <SuperText fontSize={24} width='100%' textAlign='left' color={Colors['orange']}>Бүгд: </SuperText>
                <FlatList
                    data={col}
                    renderItem={({ item }) => <Card name={item.data().productname} price={item.data().productprice} id={item.id} />}
                    keyExtractor={(_, index) => index + 'items'}
                    ItemSeparatorComponent={() => <SuperView width={12} />}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
            </SuperView>
            {data &&
                <SuperView width='90%' top='15%'>
                    <SuperText fontSize={24} width='100%' textAlign='left' color={Colors['orange']}>Урамшууллууд: </SuperText>
                    <FlatList
                        data={data.couponCollection.items}
                        renderItem={({ item }) => <CouponCard detail={item.detail} prize={item.prize} color={item.color} />}
                        keyExtractor={(_, index) => index + 'items'}
                        ItemSeparatorComponent={() => <SuperView width={20} />}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                    />
                </SuperView>
            }
        </SuperView>
    )
}