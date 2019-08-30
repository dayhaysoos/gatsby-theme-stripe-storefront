/** @jsx jsx */
import React from 'react';
import { useSkus } from '../context/shopping-cart';
import { jsx } from 'theme-ui';
import { FaShoppingBag, FaShoppingBasket } from 'react-icons/fa';

const ShoppingCartIcon = (props) => {
    return (
        <div>
            <FaShoppingBag size={40} />
            <span sx={{variant: 'span.cartCount'}}>{useSkus().cartCount}</span>
        </div>
    )
    
}

export default ShoppingCartIcon;