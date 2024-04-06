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


const Accessori = ()=>
{
   const navigation4=useNavigation();
   
    //creazione delle strutture contenti i dati dei vari item

   const cappelli=  [ {name:'Black Cap',path:require('../images/Cappelli/cap1.jpg'),prezzo:70,desc:'The baseball cap in its definitely urban and less sporty version, thanks to its opaque natural fabric. This cap is made of a lightweight water repellent poplin with a natural and at the same time technical soul, thanks to the presence of GRS (Global Recycle Standard) recycled polyamide mixed with cotton in its composition. The slightly polished surface appears matt and iridescent, having a distinctive velvet touch. ',id:19,},
   {name:'Beige Cap',path:require('../images/Cappelli/cap2.jpg'),prezzo:70,desc:'The baseball cap in its definitely urban and less sporty version, thanks to its opaque natural fabric. This cap is made of a lightweight water repellent poplin with a natural and at the same time technical soul, thanks to the presence of GRS (Global Recycle Standard) recycled polyamide mixed with cotton in its composition. The slightly polished surface appears matt and iridescent, having a distinctive velvet touch.',id:20,},
   {name:'Brown Cap',path:require('../images/Cappelli/cap3.jpg'),prezzo:70,desc:'The baseball cap in its definitely urban and less sporty version, thanks to its opaque natural fabric. This cap is made of a lightweight water repellent poplin with a natural and at the same time technical soul, thanks to the presence of GRS (Global Recycle Standard) recycled polyamide mixed with cotton in its composition. The slightly polished surface appears matt and iridescent, having a distinctive velvet touch.',id:21, }, 
   {name:'Vintage Black Cap',path:require('../images/Cappelli/cap4.jpg'),prezzo:70,desc:'The baseball cap in its definitely urban and less sporty version, thanks to its opaque natural fabric. This cap is made of a lightweight water repellent poplin with a natural and at the same time technical soul, thanks to the presence of GRS (Global Recycle Standard) recycled polyamide mixed with cotton in its composition. The slightly polished surface appears matt and iridescent, having a distinctive velvet touch.',id:22,}, ];
   

   const occhiali=  [ {name:'Gray Glasses',path:require('../images/Occhiali/gls1.jpg'),prezzo:70,desc:'Delicate rimless lenses combine with bold chain-effect temples to give the LV Jewel Cat Eye sunglasses their unique look. Classic House signatures are revealed in subtle details throughout this pair. The iconic LV Initials are incorporated into the chain link design while hand-polished Monogram Flower studs adorn the smoky gradient lenses.',id:23,},
  {name:'Vintage Glasses',path:require('../images/Occhiali/gls2.jpg'),prezzo:70,desc:'Delicate rimless lenses combine with bold chain-effect temples to give the LV Jewel Cat Eye sunglasses their unique look. Classic House signatures are revealed in subtle details throughout this pair. The iconic LV Initials are incorporated into the chain link design while hand-polished Monogram Flower studs adorn the smoky gradient lenses.',id:24,},
  {name:'Fast Glasses',path:require('../images/Occhiali/gls3.jpg'),prezzo:70,desc:'Delicate rimless lenses combine with bold chain-effect temples to give the LV Jewel Cat Eye sunglasses their unique look. Classic House signatures are revealed in subtle details throughout this pair. The iconic LV Initials are incorporated into the chain link design while hand-polished Monogram Flower studs adorn the smoky gradient lenses.',id:25, }, 
  {name:'Black Glasses',path:require('../images/Occhiali/gls4.jpg'),prezzo:70,desc:'Delicate rimless lenses combine with bold chain-effect temples to give the LV Jewel Cat Eye sunglasses their unique look. Classic House signatures are revealed in subtle details throughout this pair. The iconic LV Initials are incorporated into the chain link design while hand-polished Monogram Flower studs adorn the smoky gradient lenses.',id:26,}, ];

   return(
    
    <View style={styles.container}>
     <Image source={require('../images/accessori.jpg')} style={styles.image}></Image>

     <TouchableOpacity style={styles.button}  onPress={()=>(navigation4 as any ).navigate('Display',{cappelli:cappelli})}>
       <Text style={styles.text}>CAPS</Text>
           <View style={styles.buttonContent}>
          <Image source={require('../images/next.png')} style={styles.arrows} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>(navigation4 as any ).navigate('Display',{occhiali:occhiali})}>
       <Text style={styles.text}>GLASSES</Text>
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

export default Accessori;