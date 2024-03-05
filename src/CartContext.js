import React, { useState, createContext } from "react";

const CartContext = createContext({
  cart: [],
  dispatch: () => {},
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = ( product ) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product));
  };
  const value = { cart, addToCart, removeFromCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };