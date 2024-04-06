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
import { useRoute , Route } from '@react-navigation/native';

const Display = ({navigation,route}) =>
{
    const [postText, setPostText] = React.useState([]);
    
    // ottenimento dei parametri passati dalle varie pagine relative alla Shop come Man.Woman,Jewels...
    React.useEffect(() => {
        if (route.params?.felpe) {
          setPostText(route.params.felpe);
        }
      }, [route.params?.felpe]);

      React.useEffect(() => {
        if (route.params?.felpeD) {
          setPostText(route.params.felpeD);
        }
      }, [route.params?.felpeD]);

      React.useEffect(() => {
        if (route.params?.tshirt) {
          setPostText(route.params.tshirt);
        }
      }, [route.params?.tshirt]);

      React.useEffect(() => {
        if (route.params?.tshirtD) {
          setPostText(route.params.tshirtD);
        }
      }, [route.params?.tshirtD]);
    
      React.useEffect(() => {
        if (route.params?.Denim) {
          setPostText(route.params.Denim);
        }
      }, [route.params?.Denim]);

      React.useEffect(() => {
        if (route.params?.DenimD) {
          setPostText(route.params.DenimD);
        }
      }, [route.params?.DenimD]);

      React.useEffect(() => {
        if (route.params?.Giacche) {
          setPostText(route.params.Giacche);
        }
      }, [route.params?.Giacche]);

      React.useEffect(() => {
        if (route.params?.gioelli) {
          setPostText(route.params.gioelli);
        }
      }, [route.params?.gioelli]);

      React.useEffect(() => {
        if (route.params?.borse) {
          setPostText(route.params.borse);
        }
      }, [route.params?.borse]);
      
      React.useEffect(() => {
        if (route.params?.cappelli) {
          setPostText(route.params.cappelli);
        }
      }, [route.params?.cappelli]);

      React.useEffect(() => {
        if (route.params?.occhiali) {
          setPostText(route.params.occhiali);
        }
      }, [route.params?.occhiali]);
     
      const onButtonPress=()=>
      {
        navigation.goBack();
      };

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>

    
      <View style={styles.header}>
        <TouchableOpacity  onPress={onButtonPress}>
      <Image source={require('../images/left-arrow.png')} style={styles.backButton} ></Image>
    </TouchableOpacity>
    <Text style={styles.headerText}>ITEMS</Text> 
      </View>

      
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.row}>
          
          {postText.map((item,index)=>(
            <View key={index} style={styles.column}>
              <TouchableOpacity onPress={()=>(navigation as any).navigate('Details',{ name: item.name, path: item.path ,price:item.prezzo,desc:item.desc,id:item.id,})}>
                <Image style={styles.image} source={item.path} />
              </TouchableOpacity>
              <Text style={styles.textCenter}>{item.name}</Text>
            </View>
          ))}
  
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    textCenter: {
      fontSize: 15,
      color: "black",
      fontWeight: "bold",
      alignSelf: "center",
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between', 
      paddingHorizontal: 10, 
    },
    column: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '48%', 
      marginVertical: 10, 
    },
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
    backButton:
     {
        width:28,
        height:28,
     },
 });

export default Display;
