const React = require('react')
const { CartProvider } = require('./src/context/shopping-cart')
const { DonateProvider } = require('./src/context/donate')

exports.wrapRootElement = ({ element }, { stripePublicKey }) => {
  return (
    <CartProvider stripePublicKey={stripePublicKey}>
      <DonateProvider stripePublicKey={stripePublicKey}>
        {element}
      </DonateProvider>
    </CartProvider>
  )
}
