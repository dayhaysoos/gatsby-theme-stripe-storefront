/** @jsx jsx */
import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Styled, jsx } from 'theme-ui'
import { useCart } from '../context/shopping-cart'
import CheckoutButton from './checkout-button'
import AddItemButton from './add-item-button'

const Sku = ({ name, price, image, skuID }) => {
  return (
    <div>
      <section sx={{ variant: 'link.image' }}>
        <Styled.img src={image} />
      </section>
      <section sx={{ variant: 'section.itemDetails' }}>
        <p>{name}</p>
        <p>$ {price}</p>
      </section>
      <CheckoutButton />
      <AddItemButton skuID={skuID} />
    </div>
  )
}

export default Sku
