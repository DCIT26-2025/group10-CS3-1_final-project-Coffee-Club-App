import React from 'react'
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import { Stack } from 'expo-router'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MenuScreen from '../screens/MenuScreen'
import SettingsScreen from '../screens/SettingsScreen'
import CartScreen from '../screens/CartScreen'
import NotificationScreen from '../screens/NotificationScreen'
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
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let iconName : keyof typeof AntDesign.glyphMap;
          let iconSource : ImageSourcePropType;
          switch (route.name) {
            case "Menu":
              iconSource = focused 
              ? require("../assets/images/Tab Icons/menu_tab.png")
              : require("../assets/images/Tab Icons/menu_tab_inactive.png");
              break;
            case "CartScreen":
              iconSource = focused 
              ? require("../assets/images/Tab Icons/cart_tab.png")
              : require("../assets/images/Tab Icons/cart_tab_inactive.png");
              break;
            case "NotificationScreen":
              iconSource = focused 
              ? require("../assets/images/Tab Icons/notif_tab.png")
              : require("../assets/images/Tab Icons/notif_tab_inactive.png");
              break;
            default:
              iconSource = require("../assets/images/Tab Icons/menu_tab.png") ;
              
          }
          return (
            <View style={[styles.iconContainer, focused ? styles.activeTab : styles.inactiveTab]}>
              <Image source={iconSource} style={styles.icon} />
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
        name="NotificationScreen" 
        component={NotificationScreen} 
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
    borderRadius: 0,
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
  },

  inactiveTab: {
    backgroundColor: "transparent",
  },

  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },

})
export default TabsLayout