/** @jsx jsx */
import React from 'react';
import Layout from '../components/layout';
import { jsx } from 'theme-ui';
import { useCart } from '../context/shopping-cart';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import { FaWindowClose } from 'react-icons/fa';
import QuantityInput from '../components/quantity-input';
import { FaImage } from 'react-icons/fa';

const renderCartItems = (checkoutData, deleteItem) => {
    

    return (
        checkoutData.map(checkoutItem => {
            return (
                <li sx={{ variant: 'li.checkout.details' }} key={checkoutItem.sku}>
                    <div sx={{variant: 'div.closeWindow'}}>
                        <button onClick={() => deleteItem(checkoutItem.sku)} sx={{variant: 'button.checkout.closeWindow'}}>
                            <FaWindowClose size={30} />
                        </button>
                    </div>
                    <section sx={{ variant: 'section.itemDetails' }}>
                        <p>{checkoutItem.name}</p>
                        {checkoutItem.image === 'no-image' ? <FaImage size={200}/> : <img alt={checkoutItem.name} sx={{ variant: 'img.skuList' }} src={checkoutItem.image} />}
                        <section sx={{ variant: 'section.checkout' }}>
                            <QuantityInput
                                quantity={checkoutItem.quantity}
                                skuID={checkoutItem.sku}
                            />

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


    const { checkoutData, redirectToCheckout, deleteItem } = useCart();

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
                        {renderCartItems(formattedCheckoutData, deleteItem)}
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