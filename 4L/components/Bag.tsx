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
    Image,
    FlatList
  } from 'react-native';
  import React, { useState } from 'react';
  import useBasketStore from '../store/basketStore';
  import Animated, { FadeIn, PinwheelIn } from 'react-native-reanimated';
  
  const Bag = ({navigation}) => {
    //import delle variabili e delle funzioni create grazie a Zustand 
    const { products, total, clearCart, removeProduct } = useBasketStore(); 
    const [order, setOrder] = useState(false);
   

    const startCheck = ()=>
    {
      navigation.navigate('CustomersForm');
    };

    const isEmpty = ()=>
    {
      if (total == 0)
      {
        return true;
      }
      else 
      {
        return false;
      }
    }

    return (
      <>
        {isEmpty() && (<View style={styles.container}>
          <Text style={styles.text}>THE CART IS EMPTY</Text>
          <Text style={styles.text}>GO BUY SOME</Text>
          <Text></Text>
          <Text style={styles.text}>WAEH!!!!</Text>
        </View>)}
        {!isEmpty() && (
          <>
            <View style={styles.header}>
              
              <Text style={styles.headerText}>BAG</Text>
            
              <TouchableOpacity onPress={()=>startCheck()}>
              <Text style={{color:'rgba(83,15,208,255)'}}>CHECKOUT</Text>
              </TouchableOpacity>
              
            </View>

            <View style={{backgroundColor:'white',alignItems:'center'}}>
              <Text style={{color:'black',fontSize:18,padding:10}}>Your current total is: {total}€</Text>
            </View>

            <FlatList
              data={products}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Image style={styles.image} source={item.path} />
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>Price: {item.price}€</Text>
                    <Text style={styles.text}>Size: {item.size}</Text>
                    <Text style={styles.text}>Quantity: {item.quantity}</Text>
                    <TouchableOpacity onPress={()=>removeProduct({name:item.name,path:item.name,price:item.price,desc:item.desc,id:item.id,size:item.size})}>
                      <Text style={styles.textRemove}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>)}/> 
          </>
        )}
        
      </>
    )}
 
  
  const styles = StyleSheet.create({
    image: {
      width: 150,
      height: 150,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    itemContainer: {
      flexDirection: 'row',
      paddingVertical: 10,
      alignItems: 'center', 
    },
    textContainer: {
      flex: 1, 
      marginLeft: 10, 
    },
    header: {
      height:60,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:10,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color:'black'
    },
    text: {
      fontSize: 15,
      color: 'black',
    },
    textRemove: {
      fontSize: 15,
      color: 'red',
    },
    footerBtn: {
      backgroundColor: 'rgb(14,253,200)',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 20,
      flex:1,
    },
    footerBtnText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
    backButton:
     {
        width:28,
        height:28,
     },
     container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
  });
  
  export default Bag;
 