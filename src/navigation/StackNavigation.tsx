import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MenuScreen from '../screens/MenuScreen';
import ProductScreen from '../screens/ProductScreen';
import { RootStackParamList } from './NavigationType';


const Stack = createNativeStackNavigator<RootStackParamList>();

const MenuStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Menu" 
        component={MenuScreen}
        options={{
            headerTitle: "The Coffee Club"
        }}
        />
        <Stack.Screen 
        name="Product" 
        component={ProductScreen}
        options={{
            headerTitle: "Product Name"
        }}
        />
    </Stack.Navigator>
  )
}

export default MenuStack