import React, { createContext, useReducer, useContext } from 'react'

const reducer = (donate, action) => {
  const { lastClicked } = action

  switch (action.type) {
    case 'storeLastClicked':
      return {
        ...donate,
        lastClicked: lastClicked,
      }

    default:
      console.error(`unknown action ${action.type}`)
      return donate
  }
}

const DonateContext = createContext()

export const DonateProvider = ({ children, stripePublicKey }) => (
  <DonateContext.Provider
    value={useReducer(reducer, {
      donate: {
        lastClicked: '',
      },
      stripePublicKey,
    })}
  >
    {children}
  </DonateContext.Provider>
)

export const useDonate = () => {
  const [donate, dispatch] = useContext(DonateContext)
  const { stripePublicKey } = donate

  const stripe = window.Stripe(stripePublicKey)

  const { lastClicked } = donate

  const redirectToPlanCheckout = async plan => {
    const { error } = await stripe.redirectToCheckout({
      items: [{ plan, quantity: 1 }],
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/`,
    })
  }

  const redirectToSkuCheckout = async sku => {
    const { error } = await stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
      successUrl: `http://localhost:8000/`,
      cancelUrl: `http://localhost:8000/`,
    })
  }

  const storeLastClicked = lastClicked =>
    dispatch({ type: 'storeLastClicked', lastClicked })

  return {
    donate,
    storeLastClicked,
    lastClicked,
    redirectToPlanCheckout,
    redirectToSkuCheckout,
  }
}
