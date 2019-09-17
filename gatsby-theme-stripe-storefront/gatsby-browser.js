const React = require('react')
const { CartProvider } = require('./src/context/shopping-cart')

exports.wrapRootElement = ({ element }, { stripePublicKey }) => {
  return (
    <CartProvider stripePublicKey={stripePublicKey}>{element}</CartProvider>
  )
}
