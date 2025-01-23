import React from 'react'
import { View, Image, StyleSheet, ImageSourcePropType, Text } from 'react-native'
import { Stack } from 'expo-router'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MenuScreen from '../screens/MenuScreen'
import SettingsScreen from '../screens/SettingsScreen'
import CartScreen from '../screens/CartScreen'
import MenuStack, { OrderStack } from './StackNavigation'
import { AntDesign } from '@expo/vector-icons'
import { routeToScreen } from 'expo-router/build/useScreens'

const BottomTabNavigator = createBottomTabNavigator();

export const AppHeader = () => {
    return(
      <View style={styles.header}>
              
        <Image source={require("../assets/images/Logos/TCC_Logo.png")} style={styles.header_logo}></Image>
                    
        <View style={styles.header_title}>
            <Text style={styles.header_title_text1}>the coffee</Text>
            <Text style={styles.header_title_text2}>club.</Text>
        </View>
        
      </View>
    )
}

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
            case "OrderStatus":
              iconSource = focused 
              ? require("../assets/images/Tab Icons/notif_tab.png")
              : require("../assets/images/Tab Icons/notif_tab_inactive.png");
              break;
            default:
              iconSource = require("../assets/images/Tab Icons/menu_tab.png");
              
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
          header: AppHeader,
          tabBarLabel: "Cart",
          headerTitle: "Cart"
        }}
        />
        <BottomTabNavigator.Screen 
        name="OrderStatus" 
        component={OrderStack} 
        options={{
          header: AppHeader,
          tabBarLabel: "Order",
          headerShown: false
        }}
        />
    </BottomTabNavigator.Navigator>
  )
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  header_title: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginRight: 10,
      marginTop: 10
  },
  header_title_text1: {
      color: "#432818",
      fontSize: 20,
      fontWeight: "bold"
  },
  header_title_text2: {
      color: "#432818",
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 40
  },
  header_logo: {
      width: 70,
      height: 70,
      resizeMode: 'contain',
      marginLeft: 15,
      marginTop: 10
  },

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
    backgroundColor: "#432818",
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