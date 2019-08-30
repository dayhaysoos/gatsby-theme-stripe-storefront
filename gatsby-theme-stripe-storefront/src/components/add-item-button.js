import React from 'react';
import { useSkus } from '../context/shopping-cart';

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


export default AddItemButton;