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


const Woman = ()=>
{
  
  const navigation2 = useNavigation();

  //creazione delle strutture contenti i dati dei vari item
  const felpeD=  [ {name:'White Hoodie',path:require('../images/FelpeD/felpa1.jpg'),prezzo:40,desc:'This sophisticated zip-through hoodie in luxurious velvet takes inspiration from the collections aurora borealis. The intricately crafted jacquard conveys ethereal luminescent tones shifting across the deep black of a night sky. An allover fil coupé Monogram adds a further layer of distinction. This piece has matching jogpants for a standout trendy look.',id:1,},
  {name:'Purple Hoodie',path:require('../images/FelpeD/felpa2.jpg'),prezzo:40,desc:'This sophisticated zip-through hoodie in luxurious velvet takes inspiration from the collections aurora borealis. The intricately crafted jacquard conveys ethereal luminescent tones shifting across the deep black of a night sky. An allover fil coupé Monogram adds a further layer of distinction. This piece has matching jogpants for a standout trendy look.',id:2,},
  {name:'Black Hoodie',path:require('../images/FelpeD/felpa3.jpg'),prezzo:70,desc:'This sophisticated zip-through hoodie in luxurious velvet takes inspiration from the collections aurora borealis. The intricately crafted jacquard conveys ethereal luminescent tones shifting across the deep black of a night sky. An allover fil coupé Monogram adds a further layer of distinction. This piece has matching jogpants for a standout trendy look.',id:3, }, 
  {name:'White Crewneck',path:require('../images/FelpeD/felpa4.jpg'),prezzo:40,desc:'This sophisticated zip-through hoodie in luxurious velvet takes inspiration from the collections aurora borealis. The intricately crafted jacquard conveys ethereal luminescent tones shifting across the deep black of a night sky. An allover fil coupé Monogram adds a further layer of distinction. This piece has matching jogpants for a standout trendy look.',id:4,}, ];

const tshirtD =[{name:'Chaos Shirt',path:require('../images/tshirtD/maglia1.jpg'),prezzo:40,desc:'This smart black cotton t-shirt is embellished with a graphic printed Louis Vuitton signature and an embroidered LV Jumping Dog motif. This playful image references the universe of the artist Tyler who collaborated on this collection. This easy piece in light cotton jersey is easy to associate with casual everyday looks.',id:5,},
{name:'Chaos Rev Shirt',path:require('../images/tshirtD/maglia2.jpg'),prezzo:70,desc:'This smart black cotton t-shirt is embellished with a graphic printed Louis Vuitton signature and an embroidered LV Jumping Dog motif. This playful image references the universe of the artist Tyler who collaborated on this collection. This easy piece in light cotton jersey is easy to associate with casual everyday looks.',id:6,},
{name:'Vintage Shirt',path:require('../images/tshirtD/maglia3.jpg'),prezzo:80,desc:'This smart black cotton t-shirt is embellished with a graphic printed Louis Vuitton signature and an embroidered LV Jumping Dog motif. This playful image references the universe of the artist Tyler who collaborated on this collection. This easy piece in light cotton jersey is easy to associate with casual everyday looks.',id:7, }, 
{name:'Brown Shirt',path:require('../images/tshirtD/maglia4.jpg'),prezzo:40,desc:'This smart black cotton t-shirt is embellished with a graphic printed Louis Vuitton signature and an embroidered LV Jumping Dog motif. This playful image references the universe of the artist Tyler who collaborated on this collection. This easy piece in light cotton jersey is easy to associate with casual everyday looks.',id:8,}, ];

const DenimD =[{name:'Chaos Denim',path:require('../images/DenimD/denim1.jpg'),prezzo:80,desc:'Chic seasonal signatures uplift these timeless jeans. Cut from casual bleached denim, the staple straight-cut silhouette flatters the figure with a high waist which can be tapered at the back thanks to an integrated snap-button belt. Complete with five practical pockets and a playful 4L Cup patch at the back.',id:9,},
{name:'Chaos Rev Denim',path:require('../images/DenimD/denim2.jpg'),prezzo:40,desc:'Chic seasonal signatures uplift these timeless jeans. Cut from casual bleached denim, the staple straight-cut silhouette flatters the figure with a high waist which can be tapered at the back thanks to an integrated snap-button belt. Complete with five practical pockets and a playful 4L Cup patch at the back.',id:10,},
{name:'Vintage Denim',path:require('../images/DenimD/denim3.jpg'),prezzo:70,desc:'Chic seasonal signatures uplift these timeless jeans. Cut from casual bleached denim, the staple straight-cut silhouette flatters the figure with a high waist which can be tapered at the back thanks to an integrated snap-button belt. Complete with five practical pockets and a playful 4L Cup patch at the back.',id:11, }, 
{name:'Brown Denim',path:require('../images/DenimD/denim4.jpg'),prezzo:40,desc:'Chic seasonal signatures uplift these timeless jeans. Cut from casual bleached denim, the staple straight-cut silhouette flatters the figure with a high waist which can be tapered at the back thanks to an integrated snap-button belt. Complete with five practical pockets and a playful 4L Cup patch at the back.',id:12,}, ];

const Giacche =[{name:'Chaos Jacket',path:require('../images/Giacche/giacca1.jpg'),prezzo:80,desc:'Casual yet graphic, this jacket is crafted from this seasons signature Monogram jacquard denim with contrasting inserts of glossy lambskin leather and raw denim detailed with bold yellow topstitching for a structured vintage look. Complete with a chic standing collar, adjustable tabs on the waistline and golden hardware.',id:13,},
{name:'Chaos Rev Jacket',path:require('../images/Giacche/giacca2.jpg'),prezzo:40,desc:'Casual yet graphic, this jacket is crafted from this seasons signature Monogram jacquard denim with contrasting inserts of glossy lambskin leather and raw denim detailed with bold yellow topstitching for a structured vintage look. Complete with a chic standing collar, adjustable tabs on the waistline and golden hardware.',id:14,},];


   return(
    
    <View style={styles.container}>
     <Image source={require('../images/donnaBanner.jpg')} style={styles.image}></Image>

     <TouchableOpacity style={styles.button} onPress={()=>(navigation2 as any ).navigate('Display',{felpeD:felpeD})}>
        <Text style={styles.text}>HOODIES</Text>
          <View style={styles.buttonContent}>
          <Image source={require('../images/next.png')} style={styles.arrows} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>(navigation2 as any ).navigate('Display',{tshirtD:tshirtD})}>
        <Text style={styles.text}>T-SHIRTS</Text>
          <View style={styles.buttonContent}>
          <Image source={require('../images/next.png')} style={styles.arrows} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>(navigation2 as any ).navigate('Display',{DenimD:DenimD})}>
        <Text style={styles.text}>DENIM</Text>
          <View style={styles.buttonContent}>
          <Image source={require('../images/next.png')} style={styles.arrows} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>(navigation2 as any ).navigate('Display',{Giacche:Giacche})}>
        <Text style={styles.text}>JACKETS</Text>
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

export default Woman;



