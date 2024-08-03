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
  import BottomTab from './BottomTab';
  import Animated, { FadeIn, FadeInRight, FadeOutDown, FadingTransition } from 'react-native-reanimated';

  const Home =()=>
  {
      return(
      <SafeAreaView style={styles.safeArea}>

        <ImageBackground source={require('../images/background.jpg')}>

           <View style={styles.container}>
         
           <View style={styles.text}>
           <Image style={styles.logo} source={require("../images/Logo.png")}/> 
           <Text style={styles.title}>4L Store</Text>
           </View>
  
  
          <TouchableOpacity >
            <Image style={styles.notifications} source={require('../images/bell.png')}></Image>
          </TouchableOpacity>
          </View>
         
         <Animated.View style={styles.newSeasonContainer} entering={FadeInRight.duration(8000).springify()}>
         <Text style={{color:'black'}}>NEW COLLECTION COMING SOON</Text>
         </Animated.View>
  
        <View style={styles.imageContainer}>  
          <ImageBackground style={styles.banner} source={require('../images/back2.jpg')} resizeMode='cover'></ImageBackground>
        </View>
        </ImageBackground>

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