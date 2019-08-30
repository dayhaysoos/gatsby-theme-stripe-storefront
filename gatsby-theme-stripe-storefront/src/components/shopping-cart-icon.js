import React from 'react';
import { useSkus } from '../context/shopping-cart';

const ShoppingCartIcon = (props) => {
    return (
            <div>{useSkus().cartCount}</div>
    )
    
}

export default ShoppingCartIcon;