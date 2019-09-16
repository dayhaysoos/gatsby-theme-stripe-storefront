/** @jsx jsx */
import React from 'react';
import Layout from '../components/layout';
import { jsx } from 'theme-ui';
import { useCart } from '../context/shopping-cart';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import { FaWindowClose } from 'react-icons/fa';
import QuantityInput from '../components/quantity-input';
import { FaImage } from 'react-icons/fa';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';

const renderCartItems = (checkoutData, deleteItem) => {


    return (
        checkoutData.map(checkoutItem => {
            return (
                <li sx={{ variant: 'li.checkout.details' }} key={checkoutItem.sku}>
                    <div sx={{ variant: 'div.closeWindow' }}>
                        <button onClick={() => deleteItem(checkoutItem.sku)} sx={{ variant: 'button.checkout.closeWindow' }}>
                            <FaWindowClose size={30} />
                        </button>
                    </div>
                    <section sx={{ variant: 'section.itemDetails' }}>
                        {checkoutItem.image === 'no-image' ? <FaImage size={200} /> : <img alt={checkoutItem.name} sx={{ variant: 'img.skuList' }} src={checkoutItem.image} />}
                        <p>{checkoutItem.name}</p>
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


    const { checkoutData, redirectToCheckout, deleteItem, handleQuantityChange } = useCart();

    const updateInputValue = (e, skuID) => {
        const { value } = e.target;
        handleQuantityChange(parseInt(value), skuID)
    }

    const formattedCheckoutData = formatCartItems(skus, checkoutData)

    const handleSubmit = async ({items}) => {
        await items.forEach(item => item.quantity === 0 ? deleteItem(item.sku) : null)

        redirectToCheckout('auto')
    }

    return (
        <Layout>
            <h1>Confirm Purchase</h1>
            <Formik
                initialValues={{ items: formattedCheckoutData }}
                enableReinitialize={true}
                onSubmit={handleSubmit}
                validateOnChange={true}
                validationSchema={Yup.object().shape({
                    items: Yup.array()
                        .of(
                            Yup.object().shape({
                                quantity: Yup.number()
                                    .required('Required')
                            })
                        )
                        .required(`You're making a mistake`)
                })}
                render={({ values, errors, dirty, touched }) => (
                    <Form>
                        <FieldArray
                            name={'items'}
                            render={() => (
                                <div sx={{ variant: 'ul.checkout' }}>
                                    {values.items && values.items.length > 0 ? (
                                        values.items.map((item, index) => (
                                            <li sx={{ variant: 'li.checkout.details' }} key={item.sku}>
                                                <div sx={{ variant: 'div.closeWindow' }}>
                                                    <button
                                                        type="submit"
                                                        onClick={() => deleteItem(item.sku)}
                                                        sx={{ variant: 'button.checkout.closeWindow' }}
                                                    >
                                                        <FaWindowClose size={30} />
                                                    </button>
                                                </div>
                                                <section sx={{ variant: 'section.itemDetails' }}>
                                                    {item.image === 'no-image' ? <FaImage size={200} /> : <img alt={item.name} sx={{ variant: 'img.skuList' }} src={item.image} />}
                                                    <p>{item.name}</p>
                                                    <section sx={{ variant: 'section.checkout' }}>
                                                        <div key={index}>
                                                            <Field
                                                                sx={{variant: 'field.checkout'}}
                                                                type='number'
                                                                placeholder={'Enter Amount'}
                                                                name={item.name}
                                                                onChange={(e) => updateInputValue(e, item.sku)}
                                                                defaultValue={item.quantity}
                                                                min={0}
                                                            />
                                                        </div>

                                                    </section>
                                                </section>
                                            </li>
                                        ))
                                    ) : (
                                            <div>
                                                <h1>No Items In Cart</h1>
                                            </div>
                                        )}
                                </div>
                            )}
                        />
                        <button type="submit" onClick={() => navigate('/')} sx={{ variant: 'button.checkout' }}>Go Back</button>
                        {checkoutData.length > 0 ?
                            <button
                                sx={{ variant: errors.items ? 'button.disabled' : 'button.checkout' }}
                                type="submit"
                                disabled={errors.items ? true : false}
                                >
                                Proceed to Checkout
                        </button>
                            :
                            null
                        }
                    </Form>
                )}
            />
        </Layout>
    )
}

export default Checkout;