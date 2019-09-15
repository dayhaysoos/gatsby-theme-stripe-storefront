import React, { useState} from 'react';
import { useCart } from '../context/shopping-cart';

const QuantityInput = ({ quantity, skuID }) => {
    const { handleQuantityChange } = useCart();
    const [{inputValue}, setState] = useState({inputValue: quantity});

    const updateInputValue = (e, skuID) => {
        const { value } = e.target;
        handleQuantityChange(parseInt(value), skuID)
    } 

    return (
        <div>
            <input
                defaultValue={inputValue}
                onChange={(e) => updateInputValue(e, skuID)} type='number'
                min={1}
                max={99}
            />
        </div>
    )
}


export default QuantityInput;