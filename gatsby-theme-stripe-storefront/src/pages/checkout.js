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
                        <label>{checkoutItem.name}</label>
                        <img sx={{ variant: 'img.checkout' }} src={checkoutItem.image} />
                    </section>
                    <table sx={{ variant: 'table.checkout' }}>
                        <tr>
                            <th>Sku</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>{checkoutItem.sku}</td>
                            <td>
                                <div>{checkoutItem.quantity}</div>
                                <IncrementItemButton skuID={checkoutItem.sku} />
                                <DecrementItemButton skuID={checkoutItem.sku} />
                            </td>
                            <td>{checkoutItem.price}</td>
                        </tr>
                    </table>
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
        <Layout>
            <main sx={{ variant: 'main.checkout' }}>
                <ul sx={{ variant: 'ul.checkout' }}>
                    {renderCartItems(formattedCheckoutData)}
                </ul>
                <div sx={{ variant: 'div.confirm' }}>
                    <button onClick={() => navigate('/')} sx={{ variant: 'button.cart' }}>Go Back</button>
                    <button onClick={() => redirectToCheckout()} sx={{ variant: 'button.cart' }}>Confirm</button>
                </div>
            </main>
        </Layout>
    )
}

export default Checkout;