import React from 'react'
import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MenuScreen from '../screens/MenuScreen'
import SettingsScreen from '../screens/SettingsScreen'
import CartScreen from '../screens/CartScreen'
import OrderStatusScreen from '../screens/OrderStatusScreen'
import MenuStack from './StackNavigation'

const BottomTabNavigator = createBottomTabNavigator();

const TabsLayout = () => {
  return (
    <BottomTabNavigator.Navigator>
        <BottomTabNavigator.Screen 
        name="Menu" 
        component={MenuStack} 
        options={{
            tabBarLabel: "Menu",
            headerShown: false
        }}
        />
        <BottomTabNavigator.Screen 
        name="CartScreen" 
        component={CartScreen} 
        options={{
          tabBarLabel: "Cart",
          headerTitle: "Cart"
        }}
        />
        <BottomTabNavigator.Screen 
        name="OrderStatusScreen" 
        component={OrderStatusScreen} 
        options={{
          tabBarLabel: "Order",
          headerTitle: "Your Orders"
        }}
        />
    </BottomTabNavigator.Navigator>
  )
}

export default TabsLayout