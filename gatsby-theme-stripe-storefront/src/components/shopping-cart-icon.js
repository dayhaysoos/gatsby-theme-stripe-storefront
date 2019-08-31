/** @jsx jsx */
import React from 'react';
import { useSkus } from '../context/shopping-cart';
import { jsx } from 'theme-ui';
import { FaShoppingBag } from 'react-icons/fa';

// Shopping cart icon is <li /> to be imported as a nav item

const ShoppingCartIcon = () => {
    const { cartCount } = useSkus();
    return (
        <li sx={{variant: 'li.navItem'}}>
            <FaShoppingBag size={40} />
            <span sx={{variant: 'span.cartCount'}}>{cartCount}</span>
        </li>
    )
    
}

export default ShoppingCartIcon;