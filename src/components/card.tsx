import React, { useEffect, useState, useContext } from 'react';
import { SuperView, SuperText, Colors, SuperImage, CreateSvg, SuperSpace, SuperTouchable, MinusSvg } from '../components';
import storage from '@react-native-firebase/storage';
import { BaskterContext } from '../provider';

export const Card: React.FC<CardType> = ({ name, price, id, showIcon = true, tapped = false }) => {
    const { setBasket, basket } = useContext(BaskterContext);
    const [touched, setTouched] = useState(tapped);
    const [url, setUrl] = useState();
    useEffect(() => {
        storage().ref(`/products/${id}`).getDownloadURL().then((res: any) => setUrl(res));
    }, [url])

    useEffect(() => {
        basket.map((val: any) => {
            val === id ? setTouched(true) : 0;
        })
    }, [basket])

    const addtoBasket = () => {
        setBasket([id, ...basket]);
    }

    const removeFromBasket = () => {
        let newbasket = basket.filter((val: any) => {
            return val !== id;
        })
        setTouched(false);
        setBasket(newbasket);
    }

    return (
        <SuperView height={183} width={140} color={Colors['white']} justifyContent='space-between' radius={15}>
            <SuperView height={130} width='100%' borderWidth={8} borderColor={Colors['white']} radius={15}>
                <SuperImage source={{ uri: url }} height='100%' width='100%' overflow='hidden' radius={15} />
            </SuperView>
            <SuperText color={Colors['orange']} width='90%' textAlign='left'>{name}</SuperText>
            <SuperView flexDirection='row' justifyContent='space-between' width='90%'>
                <SuperText color={Colors['orange']} height={25} textAlign='left'>₮{price}</SuperText>
                {showIcon ? touched === false ?
                    <SuperSpace mb={10}>
                        <SuperTouchable onPress={addtoBasket}>
                            <CreateSvg width={15} height={15} color={Colors['orange']} />
                        </SuperTouchable>
                    </SuperSpace>
                    :
                    <SuperSpace mb={10}>
                        <SuperTouchable onPress={removeFromBasket}>
                            <MinusSvg color={Colors['orange']} />
                        </SuperTouchable>
                    </SuperSpace> : <SuperView />
                }
            </SuperView>
        </SuperView>
    )
}

type CardType = {
    name: string,
    price: string,
    id: string,
    tapped?: boolean,
    showIcon?: boolean,
}