import React , {useRef, useState} from 'react';
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

import useBasketStore from '../store/basketStore';

const sizes=  [{size:'XS',},{size:'S',},{size:'M',},{size:'L', }, {size:'XL'}];

const Details = ({navigation,route}) =>
{
    const {name,path,price,desc,id}=route.params; //parametri passsati tramite react navigation dalla pagina Display
  
 
    const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
    const [activeIndex,setActiveIndex] = useState(0);

    const {addProduct} = useBasketStore(); //Funzione richiamata dalla Pagina basketStore che utilizza Zustand

    
    //Funzione che tiene traccia del campo selezionato
    const selectedCategory = (index:number)=>
    {
      setActiveIndex(index);
    };   
    
    const addToCart = ()=>
    {
      const selectedSize = sizes[activeIndex].size; 
      addProduct({name,path,price,desc,id,size:selectedSize});
      navigation.goBack();
    };    

    const onButtonPress=()=>
      {
        navigation.goBack();
      };
        
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
        
            <View style={styles.header}>
        <TouchableOpacity  onPress={onButtonPress}>
      <Image source={require('../images/left-arrow.png')} style={styles.backButton} ></Image>
    </TouchableOpacity>
    <Text style={styles.headerText}>{name}</Text> 
      </View>


               <View style={styles.imageContainer}>
                  <Image source={path} style={styles.image}/>
               </View>

               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={styles.text}>Price</Text>
                 <Text style={styles.text}>{price}€</Text>
               </View>

            
         <View style={styles.buttons}>       
         {sizes.map((item,index)=>(
           <TouchableOpacity 
           style={[styles.button]} 
           onPress={()=>selectedCategory(index)}
           ref={(el)=>(itemsRef.current[index] = el)}
           key={index}>
              <Text style={activeIndex === index ? styles.active : styles.nActive}>{item.size}</Text>
           </TouchableOpacity>
         ))}
        </View>
         
        <Text style={styles.text}>Details:</Text>

        <ScrollView style={{flex:1,backgroundColor:'white'}}>
            <Text style={styles.desc}>{desc}</Text>
        </ScrollView>

            <TouchableOpacity style={styles.footerBtn} onPress={addToCart}>
                <Text style={styles.text}>Add to cart</Text>
            </TouchableOpacity>
        
            </ScrollView>
        </SafeAreaView>

        
    );
}

const styles = StyleSheet.create({
header: {
      backgroundColor: 'white',
      width: '100%',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      alignItems: 'center',
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between', 
      paddingHorizontal: 16, 
    },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    flex:1,
    textAlign:'center',
    color:'black'
  },
  imageContainer:
  {
    alignItems:'center'
  },
  text:
  {
    fontSize:20,
    paddingHorizontal:16,
    color:'white'
  },
  size:
  {
    fontSize:20,
    paddingVertical:6,
    paddingHorizontal:10,
    color:'black',
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
     buttons:
     {
        alignItems:'center',
        gap:20,
        padding:16,
        flexDirection:'row',
     },
     button: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: '#f0f0f0', 
        borderRadius: 8, 
      },
      buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333', 
      },
      desc:
      {
        padding:16,
        fontSize:16,
        color:'grey'
      },
      footer:
      {
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
        padding:16,
      },
      footerBtn:
      {
         backgroundColor:'purple',
         padding:16,
         borderRadius:8,
         alignItems:'center',
      },
      image: {
        width: 300,
        height: 300,
        resizeMode: 'cover',
        borderRadius: 10,
      },
      backButton:
     {
        width:28,
        height:28,
     },
});

export default Details;

