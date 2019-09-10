/** @jsx jsx */
import React from 'react';
import { Layout as ThemeLayout, Header, Main, jsx } from 'theme-ui';
import ShoppingCartIcon from './shopping-cart-icon';

const Layout = ({ children }) => (
    <ThemeLayout>
        <Header>
            <p>Gatsby Theme Stripe Storefront</p>
            <ShoppingCartIcon />
        </Header>
        <Main>            
            {children}
        </Main>
    </ThemeLayout>
);

export default Layout;

