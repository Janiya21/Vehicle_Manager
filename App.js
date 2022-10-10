import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";

import AddVehicle from './pages/AddVehicle';
import Login from './pages/Login';
import DetailsView from './pages/DetailsView';
import ImageUploader from "./pages/ImageUploader";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
            headerShown: false,
        }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ShowVehicle" component={DetailsView} />
          <Stack.Screen name="AddVehicle" component={AddVehicle} />
          <Stack.Screen name="ImageUploader" component={ImageUploader} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
