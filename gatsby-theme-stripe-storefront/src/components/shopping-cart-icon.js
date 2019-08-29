import React from 'react';
import { CartProvider, useSkus, CartContext } from '../context/shopping-cart';

const ShoppingCartIcon = () => {
    const { cartCount } = useSkus();
    return <h1>Cart Count: {cartCount}</h1>
}

export default () => (
    <CartProvider>
        <ShoppingCartIcon />
    </CartProvider>
);