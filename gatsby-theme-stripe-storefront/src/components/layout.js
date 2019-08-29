/** @jsx jsx */
import React from 'react';
import { Layout as ThemeLayout, Header, Main, jsx } from 'theme-ui';
import {CartProvider} from '../context/shopping-cart';
import ShoppingCartIcon from './shopping-cart-icon';

const Layout = ({ children }) => (
    <ThemeLayout>
        <Header>
            <h1>Gatsby Theme Stripe Storefront</h1>
        </Header>
        <h2>
        <ShoppingCartIcon />
        </h2>
        <Main>            
            {children}
        </Main>
    </ThemeLayout>
);

export default (props) => (
    <CartProvider>
        <Layout {...props}/>
    </CartProvider>
);

