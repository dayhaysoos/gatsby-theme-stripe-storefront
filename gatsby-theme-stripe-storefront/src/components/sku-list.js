/** @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import { Styled, jsx } from 'theme-ui';
import AddItemButton from './add-item-button';
import CheckoutButton from './checkout-button';


const renderSkuList = (skus) => (
    <Styled.ul>
        {skus.map(sku => (
            <Styled.li key={sku.id}>
                <Link sx={{ variant: 'link.image' }} to={sku.slug}>
                    <Styled.img src={sku.image} />
                </Link>
                <section sx={{variant: 'section.itemDetails'}}>
                    <p>{sku.name}</p>
                    <p>$ {sku.price}</p>
                </section>
                <section>
                    <AddItemButton skuID={sku.skuID} />
                    <CheckoutButton />
                </section>
            </Styled.li>
        ))}
    </Styled.ul>
)

const SkuList = ({ skus }) => (
    <>
        {renderSkuList(skus)}
    </>
)


export default SkuList;