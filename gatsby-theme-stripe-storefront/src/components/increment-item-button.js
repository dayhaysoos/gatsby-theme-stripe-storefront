/** @jsx jsx */
import React from 'react';
import { useCart } from '../context/shopping-cart';
import { jsx } from 'theme-ui';

const IncrementItemButton = ({ skuID }) => {
    const { addItem } = useCart();

    const handleClick = (e) => {
        addItem(skuID)
    }

    return (
        <button sx={{variant: 'button.checkout.addRemove'}} onClick={handleClick}>
            +
        </button>
    )
}


export default IncrementItemButton;