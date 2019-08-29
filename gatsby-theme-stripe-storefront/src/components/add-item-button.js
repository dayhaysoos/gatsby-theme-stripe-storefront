import React from 'react';
import { CartProvider, useSkus } from '../context/shopping-cart';

const AddItem = ({ sku }) => {
    const { addItem } = useSkus();

    console.log('use skus', sku)

    const handleClick = (e) => {
        e.preventDefault();
        addItem(sku)
    }

    return (
        <button onClick={handleClick}>Add to Cart</button>
    )
}


export default () => (
    <CartProvider>
        <AddItem />
    </CartProvider>
);