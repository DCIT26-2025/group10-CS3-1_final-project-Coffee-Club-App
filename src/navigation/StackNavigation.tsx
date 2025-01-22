import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MenuScreen from '../screens/MenuScreen';
import ProductScreen from '../screens/ProductScreen';
import { RootStackParamList } from './NavigationType';
import OrderStatusScreen from '../screens/OrderStatusScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();

const MenuStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Menu" 
        component={MenuScreen}
        options={{
            headerShown: false
        }}
        />
        <Stack.Screen 
        name="Product" 
        component={ProductScreen}
        options={{
            headerTitle: "Product"
        }}
        />
    </Stack.Navigator>
  )
}

export const OrderStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="OrderStatus" 
        component={OrderStatusScreen}
        options={{
            headerShown: false
        }}
        />
        <Stack.Screen 
        name="OrderDetail" 
        component={OrderDetailScreen}
        options={{
            headerTitle: "Order Detail"
        }}
        />
    </Stack.Navigator>
  )
}

export default MenuStack