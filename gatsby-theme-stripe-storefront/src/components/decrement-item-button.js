/** @jsx jsx */
import React from 'react'
import { useCart } from '../context/shopping-cart'
import { jsx } from 'theme-ui'

const DecrementItemButton = ({ skuID }) => {
  const { deleteItem } = useCart()

  const handleClick = e => {
    deleteItem(skuID)
  }

  return (
    <button sx={{ variant: 'button.checkout.addRemove' }} onClick={handleClick}>
      -
    </button>
  )
}

export default DecrementItemButton
