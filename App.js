import Home from './components/Home';
import Login from './components/Login';
import GetCurrentLocation from './components/GetCurrentLocation';
import { NativeWindStyleSheet } from "nativewind";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text,StyleSheet } from 'react-native';
import UserDashboard from './components/UserDashboard';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
      
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        {/* <Drawer.Screen name="Camera" component={LodgeComplain} /> */}
        <Drawer.Screen name="Location" component={GetCurrentLocation} />
        <Drawer.Screen name="UserDashboard" component={UserDashboard} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}