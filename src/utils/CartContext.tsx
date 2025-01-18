import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Alert } from 'react-native';

interface Product {
  name: string;
  price: number;
  ingredients: string;
  caffeine_level: number;
  image: any;
  quantity: number;
  totalPrice: number;
}

interface CartContextProps {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(item => item.name === product.name);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        const existingProduct = updatedCart[existingProductIndex];
        existingProduct.quantity += product.quantity;
        existingProduct.totalPrice += product.price * product.quantity;
        return updatedCart;
      } else {
        return [...prevCart, product];
      }
    });
    Alert.alert('Success', 'Added to cart');
  };

  const removeFromCart = (productName: string) => {
    setCart(cart.filter(product => product.name !== productName));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};