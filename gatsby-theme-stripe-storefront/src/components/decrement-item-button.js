/** @jsx jsx */
import React from 'react';
import { useSkus } from '../context/shopping-cart';
import { jsx } from 'theme-ui';

const DecrementItemButton = ({ skuID }) => {
    const { deleteItem } = useSkus();

    const handleClick = (e) => {
        deleteItem(skuID)
    }

    return (
        <button sx={{variant: 'button.cart'}} onClick={handleClick}>
            -
        </button>
    )
}


export default DecrementItemButton;