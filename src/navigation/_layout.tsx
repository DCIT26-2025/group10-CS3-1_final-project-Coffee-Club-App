import React from 'react'
import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

const BottomTabNavigator = createBottomTabNavigator();
const TabsLayout = () => {
  return (
    <BottomTabNavigator.Navigator>
        <BottomTabNavigator.Screen name="Home" component={HomeScreen} />
        <BottomTabNavigator.Screen name="Settings" component={SettingsScreen} />
    </BottomTabNavigator.Navigator>
  )
}

export default TabsLayout