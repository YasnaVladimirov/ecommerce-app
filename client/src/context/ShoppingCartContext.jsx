import React, { useState } from "react";
import { createContext } from "react";
import ShoppingCart from "../components/ShoppingCart";
import data from "../data/items";

const ShoppingCartContext = createContext({});

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(Math.max(...data.map(item => item.price)) || 0);

  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => setIsOpen(prev => !prev);

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseItemQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseItemQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItem,
        cartItems,
        setCartItems,
        isOpen,
        toggleCart,
        category,
        setCategory,
        price,
        setPrice,
      }}
    >
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
