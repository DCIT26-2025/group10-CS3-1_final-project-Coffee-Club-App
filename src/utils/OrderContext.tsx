import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  quantityPrice: number;
  image: any;
}

interface OrderContextProps {
  orderProducts: Product[];
  addOrder: (products: Product[]) => void;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderProducts, setOrderProducts] = useState<Product[]>([]);

  const addOrder = (products: Product[]) => {
    setOrderProducts(prevOrders => [...prevOrders, ...products]);
  };

  return (
    <OrderContext.Provider value={{ orderProducts, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};