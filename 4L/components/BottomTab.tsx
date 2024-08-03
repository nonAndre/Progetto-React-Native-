//per esportare deve avere un identificativo univoco , nella lente a sinistra fare com.'nomeApp' {ReactApp qui}  e sostituire
//necessaria anche una firma
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {StyleSheet,View,Text, Image} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Login from '../Login';
import Bag from './Bag';
import Shop from './Shop';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}

function BottomTab({navigation}) {
  
  return (
    /*Stile della bottom tab bar*/ 
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: '#ffffff',
        height: 58,
        ...styles.shadow
      }
    }}> 

     {/*Creazione dei pulsanti selezionabili nella bottom tab bar*/}
      <Tab.Screen name='      ' component={Home} options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 3 }}>
            <Image source={require('../images/icons8-home-50.png')}
              resizeMode='contain'
              style={{ width: 25, height: 25, tintColor: focused ? 'rgba(83,15,208,255)' : 'rgb(69,69,69)'  }} />
            <Text style={{ color: focused ? 'rgba(83,15,208,255)' : 'rgb(69,69,69)', fontSize: 10 }}>HOME</Text>
          </View>),
      }} />
      
    

    <Tab.Screen name=' ' component={Shop} options={{
  headerShown: false, tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: 'center', justifyContent: 'center', top: 3 }}>
      <Image source={require('../images/icons8-appendiabiti-50.png')}
        resizeMode='contain'
        style={{ width: 25, height: 25, tintColor: focused ? 'rgba(83,15,208,255)' : 'rgb(69,69,69)' }} />
      <Text style={{ color: focused ? 'rgba(83,15,208,255)' : 'rgb(69,69,69)', fontSize: 10 }}>SHOP</Text>
    </View>),
}} />


<Tab.Screen name='  ' component={Login} options={{
  headerShown: false, tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: 'center', justifyContent: 'center', top: 3 }}>
      <Image source={require('../images/user.png')}
        resizeMode='contain'
        style={{ width: 25, height: 25, tintColor: focused ? 'rgba(83,15,208,255)' : 'rgb(69,69,69)' }} />
      <Text style={{ color: focused ? 'rgba(83,15,208,255)' : 'rgb(69,69,69)', fontSize: 12 }}>PROFILE</Text>
    </View>),
}} />

<Tab.Screen name='    ' component={Bag} options={{tabBarStyle:{height:58},
  headerShown: false, tabBarIcon: ({ focused }) => (
    <View style={{ alignItems: 'center', justifyContent: 'center', top: 3 }}>
      <Image source={require('../images/shopping-cart.png')}
        resizeMode='contain'
        style={{ width: 25, height: 25, tintColor: focused ? 'rgba(83,15,208,255)' : 'rgb(69,69,69)' }} />
      <Text style={{ color: focused ? 'rgba(83,15,208,255)' : 'rgb(69,69,69)', fontSize: 12 }}>BAG</Text>
    </View>),
}} /> 
    
    </Tab.Navigator>
  );


}

const styles = StyleSheet.create(
  {
    shadow: {
      shadowColor: '#7F5DF0',
      shadowOffset:
      {
        width: 0,
        height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
    }
  })

export default BottomTab;
