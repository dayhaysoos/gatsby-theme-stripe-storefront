/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { useSkus } from '../context/shopping-cart';

const CheckoutButton = () => {
    const { redirectToCheckout } = useSkus();
    return (
        <Link to={'/checkout'}>
            <button sx={{ variant: 'button.cart' }}>Checkout</button>
        </Link>
    )
}

export default CheckoutButton;