import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "../screens/Auth";
import TabsLayout from "../navigation/_layout";

type RootStackParamList = {
  Auth: undefined;
  TabsLayout: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="TabsLayout" component={TabsLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
