/** @jsx jsx */
import React from "react"
import { useCart } from "../context/shopping-cart"
import { jsx } from "theme-ui"

const AddItemButton = ({ sku }) => {
  const { skuID } = sku
  const { addItem } = useCart()

  const handleClick = e => {
    e.preventDefault()
    addItem({ skuID, quantity: 1, test: "test" })
  }

  return (
    <button sx={{ variant: "button.cart" }} onClick={handleClick}>
      Add to Cart
    </button>
  )
}

export default AddItemButton
