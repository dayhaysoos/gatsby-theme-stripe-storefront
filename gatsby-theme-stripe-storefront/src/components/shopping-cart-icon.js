import React from 'react';
import { CartProvider, useSkus } from '../context/shopping-cart';

const ShoppingCartIcon = (props) => {
    console.log('what is this', props)
    return (
            <div>{useSkus().cartCount}</div>
    )
    
}

export default (props) => (
    <CartProvider>
        <ShoppingCartIcon {...props} />
    </CartProvider>
);