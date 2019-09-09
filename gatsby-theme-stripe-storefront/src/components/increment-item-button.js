/** @jsx jsx */
import React from 'react';
import { useSkus } from '../context/shopping-cart';
import { jsx } from 'theme-ui';

const IncrementItemButton = ({ skuID }) => {
    const { addItem } = useSkus();

    const handleClick = (e) => {
        addItem(skuID)
    }

    return (
        <button sx={{variant: 'button.cart'}} onClick={handleClick}>
            +
        </button>
    )
}


export default IncrementItemButton;