import React from 'react';
import { SuperText, SuperView, Colors, HistorySvg, BasketSvg, ShopSvg, CreateSvg, SearchSvg, SuperTouchable } from '../components';

export const BottomTabNavigation: React.FC<any> = ({ state, navigation }) => {

    const tabIcons: any = {
        HomeScreen: ShopSvg,
        HistoryScreen: HistorySvg,
        BasketScreen: BasketSvg,
        CreateScreen: CreateSvg,
        SearchScreen: SearchSvg,
    };

    const tabNames: any = {
        HomeScreen: 'Shop',
        HistoryScreen: 'History',
        BasketScreen: 'Basket',
        CreateScreen: 'Create',
        SearchScreen: 'Search',
    };

    return (
        <SuperView flexDirection='row' height={90} color={Colors['orange']} radius={10}>
            {state.routes.map((route: any, index: any) => {
                const isFocused = state.index === index;
                const CustomIcon = tabIcons[route.name];

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <SuperTouchable
                        key={route.name}
                        onPress={onPress}
                        flex={1}
                    >
                        <SuperView>
                            <CustomIcon color={isFocused ? Colors['white'] : Colors['brown']} />
                            <SuperText color={isFocused ? Colors['white'] : Colors['brown']}>
                                {tabNames[route.name]}
                            </SuperText>
                        </SuperView>
                    </SuperTouchable>
                );
            })}
        </SuperView>
    );
}