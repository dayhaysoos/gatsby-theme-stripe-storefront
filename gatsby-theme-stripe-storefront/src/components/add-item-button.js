/** @jsx jsx */
import React from 'react';
import { useSkus } from '../context/shopping-cart';
import { jsx } from 'theme-ui';

const AddItemButton = ({ skuID }) => {
    const { addItem } = useSkus();

    const handleClick = (e) => {
        e.preventDefault();
        addItem(skuID)
    }

    return (
        <button sx={{variant: 'button.cart'}} onClick={handleClick}>
            Add to Cart
        </button>
    )
}


export default AddItemButton;