import React from 'react';
import { SuperView, SuperText, Colors } from '../components';

export const CouponCard: React.FC<CardType> = ({ detail, prize, color }) => {
    return (
        <SuperView height={183} width={300} color={color} justifyContent='space-evenly' radius={15}>
            <SuperText color={Colors['white']} fontSize={24} width='90%' textAlign='left'>{prize}₮</SuperText>
            <SuperText color={Colors['white']} fontSize={14}>{detail}</SuperText>
        </SuperView>
    )
}

type CardType = {
    detail: string,
    prize: string,
    color: string,
}