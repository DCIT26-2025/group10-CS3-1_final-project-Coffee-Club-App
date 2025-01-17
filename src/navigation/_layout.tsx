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
import { routeToScreen } from 'expo-router/build/useScreens'

const BottomTabNavigator = createBottomTabNavigator();

const TabsLayout = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarLabelStyle: { fontSize: 12},
        tabBarIcon: ({ focused }) => {
          let iconName : keyof typeof AntDesign.glyphMap;
          switch (route.name) {
            case "Menu":
              iconName = "home";
              break;
            case "CartScreen":
              iconName = "home";
              break;
            case "OrderStatusScreen":
              iconName = "home";
              break;
            default:
              iconName = "home";
          }
          return (
            <View
              style={[styles.iconContainer, focused ? styles.activeTab : styles.inactiveTab]}
            >
              <AntDesign name={iconName} size={22} color={focused ? "white" : "black"} />
            </View>
          )
        }
      })}
      
      safeAreaInsets={{ bottom: 0}}
    >
        <BottomTabNavigator.Screen 
        name="Menu" 
        component={MenuStack} 
        options={{
            tabBarLabel: "Menu",
            headerShown: false,
            //tabBarIcon: ({ focused }) => <AntDesign name="home" size={22}/>
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
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "white",
    height: 80,
    borderRadius: 30,
    marginHorizontal: 10,
    alignContent: "center",
    bottom: 10,
   
  },

  tabBarItemStyle: {
    borderRadius: 20,
    margin: 20
  },

  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
    borderRadius: 30,
  },

  activeTab: {
    backgroundColor: "brown",
    // borderRadius: 20,
    // margin: 20,
    // flex: 1
  },

  inactiveTab: {
    backgroundColor: "white",
    // borderRadius: 20,
    // margin: 20,
    // flex: 1
  }
})
export default TabsLayout