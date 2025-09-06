import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);


const updateQuantity = (name, newQty) => {
  setCartItems((prev) =>
    prev.map((p) =>
      p.name.value === name ? { ...p, quantity: newQty } : p
    )
  );
};
const updateCartQuantity = (item, quantity) => {
  setCartItems((prev) => {
    if (quantity <= 0) {
      // remove item if quantity is 0
      return prev.filter((i) => i.id !== item.id);
    }

    const exists = prev.find((i) => i.id === item.id);
    if (exists) {
      return prev.map((i) =>
        i.id === item.id ? { ...i, quantity } : i
      );
    }
    return [...prev, { ...item, quantity }];
  });
};


const addToCart = (item, quantity) => {
  if (quantity <= 0) return;

  setCartItems((prev) => {
    const existing = prev.find((p) => p.name.value === item.name.value);
    if (existing) {
      // 🔥 replace the quantity instead of adding
      return prev.map((p) =>
        p.name.value === item.name.value
          ? { ...p, quantity }
          : p
      );
    } else {
      return [...prev, { ...item, quantity }];
    }
  });
};



  const removeFromCart = (name) => {
    setCartItems((prev) => prev.filter((p) => p.name.value !== name));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  // helper to get quantity of an item
  const getQuantity = (item) => {
    const found = context.cartItems.find((i) => i.id === item.id);
    return found ? found.quantity : 0;
  };

  return { ...context, getQuantity };
}


// export function useCart() {
//   return useContext(CartContext);
// }
