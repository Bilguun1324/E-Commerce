import React from 'react';
import { Screens } from './navigations';
import { BasketProvider, ContentfulProvider } from './provider';

const App = () => {
    return (
        <ContentfulProvider>
            <BasketProvider>
                <Screens />
            </BasketProvider>
        </ContentfulProvider>
    )
}

export default App