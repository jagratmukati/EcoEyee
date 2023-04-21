import React from 'react';
import Login from './Login';
import { NativeWindStyleSheet } from "nativewind";
import Home from './Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';

const Drawer = createDrawerNavigator();

NativeWindStyleSheet.setOutput({
  default: "native",
});


const DraverNavigation = () => {
  return (
    <>
      <TailwindProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
      </NavigationContainer>
    </TailwindProvider>
    </>
  )
}

export default DraverNavigation
