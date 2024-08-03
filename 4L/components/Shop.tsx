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
    ActivityIndicator,
    Platform,
    Image
  } from 'react-native';
  import React, { useRef, useState } from 'react';
  import { NavigationContainer, useNavigation } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import Ionicons from '@expo/vector-icons/Ionicons';
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import Man from './Man';
import Woman from './Woman';
import Jewels from './Jewels';
import Accessori from './Accessori';
import Borse from './Borse';
import HomePage from '../HomePage';
 
  //Array di categorie relative allo shop
  const categories=  [
    {
      name:'Men',
    },
    {
      name:'Women',
    },
    {
      name:'Jewels',
    },
    {
      name:'Handbags',
    },
    {
      name:'Accessories'
    }
  ];
   
  const Shop =()=>
  {
    const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
    const [activeIndex,setActiveIndex] = useState(0);

    //funzione che tiene traccia della categoria selezionata
    const selectedCategory = (index:number)=>
    {
      setActiveIndex(index);
    };

    return(
    
        <View>
          <ScrollView>
        <Text style={styles.text}>Collection</Text>
  
         <View style={styles.categories}>
         {categories.map((item,index)=>(
           <TouchableOpacity 
           onPress={()=>selectedCategory(index)}
           ref={(el)=>(itemsRef.current[index] = el)}
           key={index}>
              <Text style={activeIndex === index ? styles.active : styles.nActive}>{item.name as any}</Text>
           </TouchableOpacity>
         ))}
        </View>
         
         {/*In base alla categoria selezioanta viene mostrata una pagina diversa*/ }
         <View>
           {activeIndex === 0 && <Man/>}
           {activeIndex === 1 && <Woman/>}
           {activeIndex === 2 && <Jewels/>}
           {activeIndex === 3 && <Borse/>}
           {activeIndex === 4 && <Accessori/>}
        </View>

        </ScrollView>
        </View>
        
    )
  }
 
  
  const styles = StyleSheet.create({
     text:
     {
      padding:16,
      paddingVertical:40,
      fontSize:24,
      color:'black'
     },
     categories:
     {
       alignItems:'center',
       gap:20,
       padding:16,
       flexDirection:'row',
     },
     active:
     {
      color:'black',
      borderBottomColor:'black',
      borderBottomWidth:2,
      paddingBottom:0
     },
     nActive:
     {
      color:'grey'
     },
  });



  export default Shop;