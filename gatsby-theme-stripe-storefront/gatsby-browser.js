const React = require("react")
const { CartProvider } = require('./src/context/shopping-cart')

exports.wrapRootElement = ({ element }) => {
  return (
    <CartProvider>
      {element}
    </CartProvider>
  )
}