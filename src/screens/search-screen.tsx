import React, { useState } from 'react';
import { SuperView, Card, Colors, SuperInput, Button } from '../components';
import { useCol } from '../hooks/firebase';

export const SearchScreen = () => {
    const [name, setName] = useState('');
    const { search, searchDoc } = useCol('products');

    return (
        <SuperView width='100%' justifyContent='flex-start' alignItems='center' height='100%'>
            <SuperView width='90%' flexDirection='row' justifyContent='space-between' top='30%'>
                <SuperInput onChange={setName} backgroundColor={Colors['orange']} color={Colors['white']} placeholder='write your product name here' width='75%'></SuperInput>
                <Button word='Search' onPress={() => searchDoc('productname', name)} width='20%' />
            </SuperView>
            <SuperView top='20%' width='90%' justifyContent='flex-start' alignItems='flex-start'>
                {search && search.map((d: any, index: number) => {
                    return <Card name={d.data().productname} price={d.data().productprice} id={d.id} key={index} />
                })}
            </SuperView>
        </SuperView>
    )
}