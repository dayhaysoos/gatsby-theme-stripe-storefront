import React, { createContext, useReducer, useContext } from 'react';

const manageShoppingCart = (skus) => {
    const quantifiedSkus = skus.reduce((acc, currentSku) => {

        if (acc.hasOwnProperty(currentSku)) {
            acc[currentSku] = acc[currentSku] + 1
        } else {
            acc[currentSku] = 1
        }

        return {
            ...acc,
        }
    }, {})
    return Object.keys(quantifiedSkus).map(key => ({ sku: key, quantity: quantifiedSkus[key] }))
}

const removeSku = (skus, action) => {
    if (skus.skus.includes(action.skuID)) {
        const skuIndex = skus.skus.indexOf(action.skuID)
        skus.skus.splice(skuIndex, 1);
    }

    return {
        ...skus,
        skus: skus.skus.map(sku => sku)
    }
}

const reducer = (skus, action) => {
    switch (action.type) {
        case 'addItem':
            return {
                ...skus,
                skus: skus.skus.concat(action.skuID).sort()
            }

        case 'delete':
            return removeSku(skus, action);

        default:
            console.error(`unknown action ${action.type}`);
            return skus;
    }
};

export const CartContext = createContext();

export const CartProvider = ({ children, stripePublicKey }) => (
    <CartContext.Provider value={useReducer(reducer, {skus: [], stripePublicKey})}>
        {children}
    </CartContext.Provider>
);

export const useSkus = () => {
    const [{skus, stripePublicKey}, dispatch] = useContext(CartContext);

    const cartCount = skus.length;
    const checkoutData = manageShoppingCart(skus);
    const stripe = window.Stripe(stripePublicKey);

    const addItem = skuID => dispatch({ type: 'addItem', skuID });
    const deleteItem = skuID => dispatch({ type: 'delete', skuID });


    const redirectToCheckout = async () => {

        const { error } = await stripe.redirectToCheckout({
            items: checkoutData,
            successUrl: `http://localhost:8000/`,
            cancelUrl: `http://localhost:8000/`,
        })
        if (error) {
            console.warn("Error:", error)
        }

    }

    return { skus, addItem, deleteItem, cartCount, checkoutData, redirectToCheckout };
};