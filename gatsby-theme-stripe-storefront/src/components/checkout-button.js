/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { useSkus } from '../context/shopping-cart';

const CheckoutButton = () => {
    const {redirectToCheckout} = useSkus();
    return <button onClick={redirectToCheckout}>Checkout</button>
}

export default CheckoutButton;