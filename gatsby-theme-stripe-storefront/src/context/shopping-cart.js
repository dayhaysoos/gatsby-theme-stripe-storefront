import React, { createContext, useReducer, useContext } from 'react';

const buildCart = (skus, { skuID, quantity }) => {

    if (skus.hasOwnProperty(skuID)) {
        return {
            ...skus,
            [skuID]: skus[skuID] + quantity
        }
    } else {
        return {
            ...skus,
            [skuID]: quantity
        }
    }
}

const formatCart = (checkoutData) => {

    return (
        Object.keys(checkoutData).map(item =>
            ({
                sku: item,
                quantity: checkoutData[item]
            })
        )
    )
}

const updateQuantity = (quantity, skuID, skus) => {
    return ({
        ...skus, 
        [skuID]: quantity
    })

}

const removeSku = (skuID, skus) => {

    delete skus[skuID]

    return skus;
}

const reducer = (cart, action) => {
    const { skus } = cart;

    switch (action.type) {
        case 'addItem':
            return {
                ...cart,
                skus: buildCart(skus, action.sku)
            }
        case 'handleQuantityChange':
                updateQuantity(action.quantity, action.skuID, skus)
            return {
                ...cart,
                skus: updateQuantity(action.quantity, action.skuID, skus)
            }
        case 'delete':
            return {
                ...cart,
                skus: removeSku(action.skuID, skus)
            }

        default:
            console.error(`unknown action ${action.type}`);
            return cart;
    }
};

export const CartContext = createContext();

export const CartProvider = ({ children, stripePublicKey }) => (
    <CartContext.Provider value={useReducer(reducer, { skus: {}, stripePublicKey })}>
        {children}
    </CartContext.Provider>
);

export const useCart = () => {
    const [cart, dispatch] = useContext(CartContext);

    const { skus, stripePublicKey } = cart;


    const checkoutData = formatCart(skus);
    const cartCount = checkoutData.reduce((acc, current) => acc + current.quantity, 0)
    const stripe = window.Stripe(stripePublicKey);

    const addItem = sku => dispatch({ type: 'addItem', sku });
    const handleQuantityChange = (quantity, skuID) => dispatch({ type:'handleQuantityChange', quantity, skuID })
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

    return { skus, addItem, deleteItem, cartCount, checkoutData, redirectToCheckout, handleQuantityChange };
};