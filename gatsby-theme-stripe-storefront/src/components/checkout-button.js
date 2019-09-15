/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { useCart } from '../context/shopping-cart';

const CheckoutButton = () => {
    const { cartCount } = useCart();
    return (
        <Link to={'/checkout'}>
            <button
                disabled={!cartCount > 0}
                sx={{ variant: cartCount > 0 ? 'button.cart' : 'button.disabled' }}>
                Checkout
            </button>
        </Link>
    )
}

export default CheckoutButton;