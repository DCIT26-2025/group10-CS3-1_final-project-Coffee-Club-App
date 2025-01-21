import { View, Text } from 'react-native';
import React from 'react';
import TabsLayout from '../navigation/_layout';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from '../utils/CartContext';

export default function App() {
  return (
    <CartProvider>
      <TabsLayout />
    </CartProvider>
  );
}