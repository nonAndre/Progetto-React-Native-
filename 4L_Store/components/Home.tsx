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
  ImageBackground
} from 'react-native';
import React from 'react';


const Home =()=>
{
    return(
    <SafeAreaView style={styles.safeArea}>
         <View style={styles.container}>
       
         <View style={styles.text}>
         <Image style={styles.logo} source={require("../images/Logo.png")}/> 
         <Text style={styles.title}>4L Store</Text>
         </View>


        <TouchableOpacity >
          <Image style={styles.notifications} source={require('../images/bell.png')}></Image>
        </TouchableOpacity>
        </View>
       
       <View style={styles.newSeasonContainer}>
       <Text>NEW COLLECTION COMING SOON</Text>
       </View>

      <View style={styles.imageContainer}>  
        <ImageBackground style={styles.banner} source={require('../images/banner.png')} resizeMode='cover'></ImageBackground>
      </View>
      
    </SafeAreaView>)
}

// 

const styles = StyleSheet.create({
    safeArea:
    {
       flex:1,
       backgroundColor:'white'
    },
     container:{
        height:60,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:10
     },
     logo:
     {
        width:60,
        height:70,
     },
     title:
     {
         fontSize:14,
         color:'black'
     },
     notifications:
     {
        width:28,
        height:28,
     },
     banner:
     {
        height:640,
        width:500,
     },
     imageContainer:
     {
        paddingVertical:4,
        flex:1,
        height:600,
        width:500,
        alignItems:'center',
     },
     newSeasonContainer:
     {
        alignSelf:'center',

     },
     newSeasonContainerText:
     {
        fontSize:14,
     },
     text:
     {
      flexDirection:'row',
      alignItems:'center'
     }

});


export default Home;