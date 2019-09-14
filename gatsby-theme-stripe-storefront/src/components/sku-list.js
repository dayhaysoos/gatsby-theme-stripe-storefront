/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { useCart } from '../context/shopping-cart';
import AddItemButton from './add-item-button';
import CheckoutButton from './checkout-button';
import { FaImage } from 'react-icons/fa';


const renderSkuList = (skus, cartCount) => {

    return (
        <ul sx={{ variant: 'ul.skuList' }}>
            {skus.map(sku => (
                <li sx={{ variant: 'li.purchaseItem' }} key={sku.id}>
                    <section sx={{ variant: 'section.itemDetails' }}>
                    {sku.image === 'no-image' ? <FaImage size={200}/> : <img alt={sku.name} sx={{ variant: 'img.skuList' }} src={sku.image} />}
                        <p>{sku.name}</p>
                        <p>USD: ${sku.price}</p>
                    </section>
                    <section sx={{ variant: 'section.buttonWrapper' }}>
                        <AddItemButton skuID={sku.skuID} />
                        {(cartCount > 0 && <CheckoutButton /> )}
                    </section>
                </li>
            ))}
        </ul>
    )
}

const SkuList = ({ skus }) => {

    const { cartCount } = useCart();

    return (
        <>
            {renderSkuList(skus, cartCount)}
        </>
    )
}


export default SkuList;