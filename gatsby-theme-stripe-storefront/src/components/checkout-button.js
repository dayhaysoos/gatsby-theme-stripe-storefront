/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { useSkus } from '../context/shopping-cart';

const CheckoutButton = () => {
    const {redirectToCheckout} = useSkus();
    return <button sx={{variant: 'button.cart'}} onClick={redirectToCheckout}>Checkout</button>
}

export default CheckoutButton;