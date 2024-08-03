import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image
} from 'react-native';
import { getPathFromState, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import SignUp from './components/SingUp'
import Home from './components/Home';
import BottomTab from './components/BottomTab';
import Details from './components/Details';
import Display from './components/Display';
import CustomerForm from './components/CustomersFrom';
import Greetings from './components/Greetings';
import Shop from './components/Shop';
import Man from './components/Man';

const Stack = createNativeStackNavigator();

function App() {
  return (<Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
    <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
    <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
    <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}}/>
    <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
    <Stack.Screen name="Display" component={Display} options={{headerShown:false}}/>
    <Stack.Screen name="CustomersForm" component={CustomerForm} options={{headerShown:false}}/>
    <Stack.Screen name="Greetings" component={Greetings} options={{headerShown:false}}/>
  </Stack.Navigator>);
}

function Providers() {
  return (<NavigationContainer>
    <App />
  </NavigationContainer>)

}


export default Providers;
