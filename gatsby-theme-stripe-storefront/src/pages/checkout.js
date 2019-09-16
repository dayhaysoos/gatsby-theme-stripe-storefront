/** @jsx jsx */
import React from 'react';
import Layout from '../components/layout';
import { jsx } from 'theme-ui';
import { useCart } from '../context/shopping-cart';
import CheckoutItems from '../components/checkout-items';

const Checkout = () => {

    const { checkoutData } = useCart();

    return (
        <Layout>
            {checkoutData.length === 0 ? null : <h1>Confirm Purchase</h1>}
            <CheckoutItems />
        </Layout>
    )
}

export default Checkout;