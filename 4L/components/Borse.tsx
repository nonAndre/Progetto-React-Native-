import React , {useState} from 'react';
import type {PropsWithChildren} from 'react';
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

import { NavigationContainer, useNavigation } from '@react-navigation/native';


const Borse = ()=>
{
  
  const navigation5 = useNavigation();
  
  //creazione delle strutture contenti i dati dei vari item
  const borse=  [ {name:'White Bag',path:require('../images/Borse/borsa1.jpg'),prezzo:70,desc:'Part of the Runway Spring Summer 2024 accessories, this womens bag has an ironic silhouette, inspired by classic video game joysticks. With a clean and compact crossbody design, it is made of shiny PU printed with an imaginary poster, inspired by film posters from the 70s and 80s:',id:27,},
  {name:'Pink Bag',path:require('../images/Borse/borsa2.jpg'),prezzo:80,desc:'Part of the Runway Spring Summer 2024 accessories, this womens bag has an ironic silhouette, inspired by classic video game joysticks. With a clean and compact crossbody design, it is made of shiny PU printed with an imaginary poster, inspired by film posters from the 70s and 80s:',id:28,},
  {name:'Lime Bag',path:require('../images/Borse/borsa3.jpg'),prezzo:60,desc:'Part of the Runway Spring Summer 2024 accessories, this womens bag has an ironic silhouette, inspired by classic video game joysticks. With a clean and compact crossbody design, it is made of shiny PU printed with an imaginary poster, inspired by film posters from the 70s and 80s:',id:29, }, 
  {name:'Blue Bag',path:require('../images/Borse/borsa4.jpg'),prezzo:50,desc:'Part of the Runway Spring Summer 2024 accessories, this womens bag has an ironic silhouette, inspired by classic video game joysticks. With a clean and compact crossbody design, it is made of shiny PU printed with an imaginary poster, inspired by film posters from the 70s and 80s:.',id:30,}, ];

   return(
    
    <View style={styles.container}>
     <Image source={require('../images/Borse/borsa3.jpg')} style={styles.image}></Image>

     <TouchableOpacity style={styles.button} onPress={()=>(navigation5 as any).navigate('Display',{borse:borse})}>
        <Text style={styles.text}>EXPLORE</Text>
          <View style={styles.buttonContent}>
          <Image source={require('../images/next.png')} style={styles.arrows} />
        </View>
      </TouchableOpacity>

    </View>

    
   );
}

const styles = StyleSheet.create({
  main:
  {
    flex: 1,
    backgroundColor:'pink'
  },
  image:
  {
    height:370,
    width:400,
  },
  text:
  {
    padding:10,
    fontSize:17,
    color:'black',
  },
  button:
  {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  container:{
    backgroundColor:'white',
    flex:1,
    height:600,
 },
 arrows:
     {
        width:40,
        height:30,
        alignItems:'center',
     },
     buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
        },
});

export default Borse;