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


const Jewels = ()=>
{
  
  const navigation3 = useNavigation();
  

  //creazione delle strutture contenti i dati dei vari item
  const gioelli=  [ {name:'Green Earing',path:require('../images/Jewels/jewel1.jpg'),prezzo:15,desc:'4Ls round cut Tennis Bracelets have become a classic. The meticulous attention to detail in these stones will leave your wrist drippin. Not to mention that these pieces catch light from all angles to keep your wrist dancing all day and night. ',id:15,},
  {name:'Purple Chain',path:require('../images/Jewels/jewel2.jpg'),prezzo:40,desc:'4Ls round cut Tennis Bracelets have become a classic. The meticulous attention to detail in these stones will leave your wrist drippin. Not to mention that these pieces catch light from all angles to keep your wrist dancing all day and night. ',id:16,},
  {name:'Rainbow Ring',path:require('../images/Jewels/jewel3.jpg'),prezzo:60,desc:'4Ls round cut Tennis Bracelets have become a classic. The meticulous attention to detail in these stones will leave your wrist drippin. Not to mention that these pieces catch light from all angles to keep your wrist dancing all day and night. ',id:17, }, 
  {name:'Emerald Bracelet',path:require('../images/Jewels/jewel4.jpg'),prezzo:150,desc:'4Ls round cut Tennis Bracelets have become a classic. The meticulous attention to detail in these stones will leave your wrist drippin. Not to mention that these pieces catch light from all angles to keep your wrist dancing all day and night. ',id:18,}, 
  {name:'Pharrel Set',path:require('../images/Jewels/jewel5.jpg'),prezzo:500,desc:'4Ls round cut Pharrel Set have become a classic. The meticulous attention to detail in these stones will leave your wrist drippin. Not to mention that these pieces catch light from all angles to keep your wrist dancing all day and night. ',id:189,},
  {name:'Live yours',path:require('../images/Jewels/jewel6.jpg'),prezzo:500,desc:'4Ls round cut Chain have become a classic. The meticulous attention to detail in these stones will leave your wrist drippin. Not to mention that these pieces catch light from all angles to keep your wrist dancing all day and night. ',id:1899,}
];

   return(
    
    <View style={styles.container}>
     <Image source={require('../images/Jewels/jewel6.jpg')} style={styles.image}></Image>

     <TouchableOpacity style={styles.button}  onPress={()=>(navigation3 as any ).navigate('Display',{gioelli:gioelli})}>
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
    height:320,
    width:400,
    resizeMode:'stretch'
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
    height:600
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

export default Jewels;