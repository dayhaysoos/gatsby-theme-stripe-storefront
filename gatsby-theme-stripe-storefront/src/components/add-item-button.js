import React from 'react';
import { CartProvider, useSkus } from '../context/shopping-cart';

const AddItemButton = ({ skuID }) => {
    const { addItem } = useSkus();

    const handleClick = (e) => {
        e.preventDefault();
        addItem(skuID)
    }

    return (
        <button onClick={handleClick}>Add to Cart</button>
    )
}


export default props => (
    <CartProvider>
        <AddItemButton {...props} />
    </CartProvider>
);