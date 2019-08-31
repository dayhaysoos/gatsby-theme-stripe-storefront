import React, { createContext, useReducer, useContext } from 'react';

const reducer = (skus, action) => {
    switch (action.type) {
        case 'addItem':
            return skus.concat({
                sku: action.skuID,
                quantity: 1
            });

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

    const addItem = skuID => dispatch({ type: 'addItem', skuID });
    const toggleItem = skuID => dispatch({ type: 'toggle', skuID });
    const deleteItem = skuID => dispatch({ type: 'delete', skuID });

    return { skus, addItem, toggleItem, deleteItem, cartCount};
};