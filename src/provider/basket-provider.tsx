import React, { createContext, useState } from 'react';

export const BaskterContext = createContext<ContextType>({
    basket: null,
    setBasket: () => { },
});

export const BasketProvider = ({ children }: any) => {
    const [basket, setBasket] = useState([]);
    return (
        <BaskterContext.Provider value={{ basket, setBasket }}>
            {children}
        </BaskterContext.Provider>
    );
};

type ContextType = {
    basket: any,
    setBasket: Function,
}