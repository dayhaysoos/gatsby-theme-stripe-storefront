/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { useCart } from '../context/shopping-cart';

const CheckoutButton = () => {
    return (
        <Link to={'/checkout'}>
            <button sx={{ variant: 'button.cart' }}>Checkout</button>
        </Link>
    )
}

export default CheckoutButton;