/** @jsx jsx */
import React, { Component } from 'react';
import { Styled, jsx } from 'theme-ui'
import AddItemButton from './add-item-button';

const Sku = (props) => {

    const redirectToCheckout = async (event) => {
        event.preventDefault();

        const { skuID } = props;


        const { error } = await this.stripe.redirectToCheckout({
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