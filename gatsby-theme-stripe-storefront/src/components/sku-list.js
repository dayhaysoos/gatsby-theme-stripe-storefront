/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import AddItemButton from './add-item-button';
import CheckoutButton from './checkout-button';


const renderSkuList = (skus) => (
    <ul sx={{variant: 'ul.skuList'}}>
        {skus.map(sku => (
            <li sx={{variant: 'li.purchaseItem'}} key={sku.id}>
                <Link sx={{ variant: 'link.image' }} to={sku.slug}>
                    <img alt={sku.name} sx={{variant: 'img.skuList'}} src={sku.image} />
                </Link>
                <section sx={{variant: 'section.itemDetails'}}>
                    <p>{sku.name}</p>
                    <p>USD: ${sku.price}</p>
                </section>
                <section>
                    <AddItemButton skuID={sku.skuID} />
                    <CheckoutButton />
                </section>
            </li>
        ))}
    </ul>
)

const SkuList = ({ skus }) => (
    <>
        {renderSkuList(skus)}
    </>
)


export default SkuList;