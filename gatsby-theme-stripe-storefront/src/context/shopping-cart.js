import React, { createContext, useReducer, useContext } from 'react';

const manageShoppingCart = (skus) => {
    const quantifiedSkus = skus.reduce((acc, currentSku) => {
      
      if(acc.hasOwnProperty(currentSku)) {
        acc[currentSku] = acc[currentSku]+1
      } else {
        acc[currentSku] = 1
      }
      
      return {
        ...acc,
      }
    }, {})
      return Object.keys(quantifiedSkus).map(key => ({sku: key, quantity: quantifiedSkus[key]}))
    }

const reducer = (skus, action) => {
    switch (action.type) {
        case 'addItem':
                return skus.concat(action.skuID);

        case 'delete':
            return skus.filter(sku => sku.id !== action.id);

        case 'toggle':
            return skus.map(sku =>
                sku.id === action.id
                    ? {
                        ...sku,
                        completed: !sku.completed
                    }
                    : sku
            );

        default:
            console.error(`unknown action ${action.type}`);
            return skus;
    }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => (
    <CartContext.Provider value={useReducer(reducer, [])}>
        {children}
    </CartContext.Provider>
);

export const useSkus = () => {
    const [skus, dispatch] = useContext(CartContext);

    const cartCount = skus.length;
    const checkoutData = manageShoppingCart(skus);
    const stripe = window.Stripe(process.env.STRIPE_API_PUBLIC)

    const addItem = skuID => dispatch({ type: 'addItem', skuID });
    const toggleItem = skuID => dispatch({ type: 'toggle', skuID });
    const deleteItem = skuID => dispatch({ type: 'delete', skuID });

    const redirectToCheckout = async (event) => {
        event.preventDefault();

        const { error } = await stripe.redirectToCheckout({
            items: checkoutData,
            successUrl: `http://localhost:8000/`,
            cancelUrl: `http://localhost:8000/`,
        })
        if (error) {
            console.warn("Error:", error)
        }

    }

    return { skus, addItem, toggleItem, deleteItem, cartCount, checkoutData, redirectToCheckout};
};