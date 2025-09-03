import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

// Create the CartContext
const CartContext = createContext();

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = useCallback((product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // If product already exists, increment quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product doesn't exist, add it with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }, []);

  // Remove product completely from cart
  const removeFromCart = useCallback((productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  }, []);

  // Update quantity of a specific product
  const updateQuantity = useCallback((productId, newQuantity) => {
    if (newQuantity <= 0) {
      // If quantity is 0 or negative, remove the item
      setCartItems(prevItems => 
        prevItems.filter(item => item.id !== productId)
      );
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, []);

  // Clear entire cart
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Calculate cart total (sum of price * quantity for all items)
  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }, [cartItems]);

  // Calculate total number of items in cart
  const itemCount = useMemo(() => {
    return cartItems.reduce((count, item) => {
      return count + item.quantity;
    }, 0);
  }, [cartItems]);

  // Context value object - memoized to prevent unnecessary re-renders
  // Only include stable functions and computed values
  const value = useMemo(() => ({
    cartItems: cartItems || [], // Ensure cartItems is always an array
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal: cartTotal || 0, // Ensure cartTotal is always a number
    itemCount: itemCount || 0, // Ensure itemCount is always a number
    clearCart,
    // Inline functions to avoid circular dependencies
    getCartItem: (productId) => (cartItems || []).find(item => item.id === productId),
    isInCart: (productId) => (cartItems || []).some(item => item.id === productId)
  }), [
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    itemCount,
    clearCart
  ]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  // Ensure all values are safe and have defaults
  return {
    cartItems: context.cartItems || [],
    addToCart: context.addToCart || (() => {}),
    removeFromCart: context.removeFromCart || (() => {}),
    updateQuantity: context.updateQuantity || (() => {}),
    cartTotal: context.cartTotal || 0,
    itemCount: context.itemCount || 0,
    clearCart: context.clearCart || (() => {}),
    getCartItem: context.getCartItem || (() => undefined),
    isInCart: context.isInCart || (() => false)
  };
};

// Export the context for advanced usage if needed
export { CartContext };