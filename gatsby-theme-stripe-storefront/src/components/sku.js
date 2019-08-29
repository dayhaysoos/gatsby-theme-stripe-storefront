/** @jsx jsx */
import React, { Component } from 'react';
import { Styled, jsx } from 'theme-ui'
import { useSkus, CartProvider } from '../context/shopping-cart';

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
    const { addItem } = useSkus();

    return (
            <div>
                <Styled.img src={image} />
                <Styled.p>{name}</Styled.p>
                <Styled.p>$ {price}</Styled.p>
                <button onClick={redirectToCheckout}>Purchase item</button>
                <button onClick={() => addItem(skuID)}>Add to Cart</button>
            </div>
    )

}


export default props => (
    <CartProvider>
        <Sku {...props}/>
    </CartProvider>
)