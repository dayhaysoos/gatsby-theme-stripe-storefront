/** @jsx jsx */
import React from 'react';
import Layout from '../components/layout';
import { jsx } from 'theme-ui';
import { useSkus } from '../context/shopping-cart';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import DecrementItemButton from '../components/decrement-item-button';
import IncrementItemButton from '../components/increment-item-button';

const renderCartItems = (checkoutData) => {

    return (
        checkoutData.map(checkoutItem => {
            return (
                <li sx={{ variant: 'li.checkout.details' }} key={checkoutItem.sku}>
                    <section sx={{ variant: 'section.itemDetails' }}>
                        <p>{checkoutItem.name}</p>
                        <p>{checkoutItem.sku}</p>
                        <img alt={checkoutItem.name} sx={{ variant: 'img.checkout' }} src={checkoutItem.image} />
                        <section sx={{variant: 'section.checkout'}}>
                            <p>Quantity: {checkoutItem.quantity}</p>
                            <div sx={{variant: 'div.checkout'}}>
                                <IncrementItemButton skuID={checkoutItem.sku} />
                                <DecrementItemButton skuID={checkoutItem.sku} />
                            </div>

                        </section>
                    </section>
                </li>
            )
        })
    )
}

const formatCartItems = (skus, checkoutData) => {

    let arr = [];

    for (let i = 0; i < checkoutData.length; i++) {
        for (let j = 0; j < skus.length; j++) {
            if (checkoutData[i].sku === skus[j].skuID) {
                arr.push({
                    ...checkoutData[i],
                    image: skus[j].image,
                    price: skus[j].price,
                    name: skus[j].name
                })
            }
        }
    }

    return arr;

}

const Checkout = () => {

    const data = useStaticQuery(graphql`
    query {
      allStripeSku {
        nodes {
          name
          price
          currency
          slug
          image
          skuID
        }
      }
    }
  `);

    const skus = data.allStripeSku.nodes;


    const { checkoutData, redirectToCheckout } = useSkus();

    const formattedCheckoutData = formatCartItems(skus, checkoutData)

    return (
        checkoutData.length === 0
            ? (
                <Layout>
                        <h2>There are no items in the cart</h2>
                        <button onClick={() => navigate('/')} sx={{ variant: 'button.cart' }}>Go Back</button>
                </Layout>
            )
            : (
                <Layout>
                    <h2>Confirm Purchases</h2>
                        <ul sx={{ variant: 'ul.checkout' }}>
                            {renderCartItems(formattedCheckoutData)}
                        </ul>
                        <div sx={{ variant: 'div.confirm' }}>
                            <button onClick={() => navigate('/')} sx={{ variant: 'button.checkout' }}>Go Back</button>
                            <button onClick={() => redirectToCheckout()} sx={{ variant: 'button.checkout' }}>Confirm</button>
                        </div>
                </Layout>
            )
    )
}

export default Checkout;