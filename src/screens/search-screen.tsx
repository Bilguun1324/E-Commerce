import React, { useState } from 'react';
import { SuperView, Card, Colors, SuperInput, Button } from '../components';
import { useCol } from '../hooks/firebase';

export const SearchScreen = () => {
    const [name, setName] = useState('');
    const { search, searchDoc } = useCol('products');

    return (
        <SuperView width='90%' justifyContent='flex-start'>
            <SuperView width='100%' flexDirection='row' justifyContent='space-between' top='30%' left='10%'>
                <SuperInput onChange={setName} backgroundColor={Colors['orange']} color={Colors['white']} placeholder='write your product name here' width='75%'></SuperInput>
                <Button word='Search' onPress={() => searchDoc('productname', name)} width='20%' />
            </SuperView>
            <SuperView top='50%' right='24%' width='100%'>
                {search && search.map((d: any, index: number) => {
                    return <Card name={d.data().productname} price={d.data().productprice} id={d.id} key={index} />
                })}
            </SuperView>
        </SuperView>
    )
}