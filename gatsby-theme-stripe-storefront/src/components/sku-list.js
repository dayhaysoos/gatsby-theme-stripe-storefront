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
                <Link to={sku.slug}>
                    <Styled.img src={sku.image} />
                </Link>
                <Link to={sku.slug}>
                    <Styled.p>{sku.name}</Styled.p>
                </Link>
                <Styled.p>$ {sku.price}</Styled.p>
                <AddItemButton skuID={sku.skuID}/>
                <CheckoutButton />
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