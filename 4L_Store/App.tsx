import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import Display from './components/Display';
import Details from './components/Details';
import Greetings from './components/Greetings';
import Shop from './components/Shop';
import Home from './components/Home';
import CustomersForm from './components/CustomersForm';



const Stack = createNativeStackNavigator(); //creo lo stack tramite react navigation-native stack


const App=() => {
  {/*Implementazione dei vari screen per rendere possibile la navigazione*/}
  return (<Stack.Navigator>
    <Stack.Screen name="Home" component={HomePage} options={{headerShown:false}}/>
    <Stack.Screen name="Display" component={Display} options={{headerShown:false}}/>
    <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
    <Stack.Screen name="Shop" component={Shop} options={{headerShown:false}}/>
    <Stack.Screen name="Greetings" component={Greetings} options={{headerShown:false}}/>
    <Stack.Screen name="CustomersForm" component={CustomersForm} options={{headerShown:false}}/>
  </Stack.Navigator>);
}

function Providers() {
  return (<NavigationContainer>
    <App />
  </NavigationContainer>)

}


export default Providers;
