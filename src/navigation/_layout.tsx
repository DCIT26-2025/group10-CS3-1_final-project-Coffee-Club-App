import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MenuScreen from '../screens/MenuScreen'
import SettingsScreen from '../screens/SettingsScreen'
import CartScreen from '../screens/CartScreen'
import OrderStatusScreen from '../screens/OrderStatusScreen'
import MenuStack from './StackNavigation'
import { AntDesign } from '@expo/vector-icons'

const BottomTabNavigator = createBottomTabNavigator();

const TabsLayout = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarActiveBackgroundColor: "brown"
      }}
      safeAreaInsets={{ bottom: 0}}
    >
        <BottomTabNavigator.Screen 
        name="Menu" 
        component={MenuStack} 
        options={{
            tabBarLabel: "Menu",
            headerShown: false,
            tabBarIcon: ({ focused }) => <AntDesign name="home" size={22}/>
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

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    backgroundColor: "white",
    height: 80,
    borderRadius: 30,
    marginHorizontal: 10,
    alignContent: "center",
    bottom: 10,
   
  },

  tabBarItem: {
    borderRadius: 20,
    margin: 20
  },

  activeTab: {
    backgroundColor: "brown",
    borderRadius: 20,
    margin: 20,
    flex: 1
  },

  inactiveTab: {
    backgroundColor: "brown",
    borderRadius: 20,
    margin: 20,
    flex: 1
  }
})
export default TabsLayout