/** @jsx jsx */
import React, { Component } from 'react';
import { Styled, jsx } from 'theme-ui'
import AddItemButton from './add-item-button';


const Sku = (props) => {

    const stripe = window.Stripe(process.env.STRIPE_API_PUBLIC)

    const redirectToCheckout = async (event) => {
        event.preventDefault();

        console.log(window.history.state)

        const { skuID } = props;


        const { error } = await stripe.redirectToCheckout({
            items: [{ sku: skuID, quantity: 1 }],
            successUrl: `http://localhost:8000/`,
            cancelUrl: `http://localhost:8000/`,
        })
        if (error) {
            console.warn("Error:", error)
        }

    }

    const { name, price, image, skuID } = props;

    return (
            <div>
                <Styled.img src={image} />
                <Styled.p>{name}</Styled.p>
                <Styled.p>$ {price}</Styled.p>
                <button onClick={redirectToCheckout}>Purchase item</button>
                <AddItemButton skuID={skuID} />
            </div>
    )

}


export default Sku;