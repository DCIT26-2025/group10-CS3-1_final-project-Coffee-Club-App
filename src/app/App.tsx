import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "../screens/LoginScreen";
import TabsLayout from "../navigation/_layout";
import { CartProvider } from "../utils/CartContext";
import { OrderProvider } from "../utils/OrderContext";



type RootStackParamList = {
  Auth: undefined;
  TabsLayout: undefined;
  MainMenu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    
    <OrderProvider>
      <CartProvider>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="TabsLayout" component={TabsLayout} options={{headerShown: false}}/>
        </Stack.Navigator>
      </CartProvider>
    </OrderProvider>
    
  );
}




/*
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
*/