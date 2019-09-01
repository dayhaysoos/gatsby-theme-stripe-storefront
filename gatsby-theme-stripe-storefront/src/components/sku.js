/** @jsx jsx */
import React, { Component } from 'react';
import { Styled, jsx } from 'theme-ui'
import { useSkus } from '../context/shopping-cart';
import CheckoutButton from './checkout-button';
import AddItemButton from './add-item-button';


const Sku = (props) => {

    const { name, price, image, skuID } = props;

    return (
            <div>
                <Styled.img src={image} />
                <Styled.p>{name}</Styled.p>
                <Styled.p>$ {price}</Styled.p>
                <CheckoutButton />
                <AddItemButton skuID={skuID} />
            </div>
    )

}


export default Sku;