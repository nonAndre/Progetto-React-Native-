import React, { useState } from 'react'
import { Alert, Button, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import Animated,{ FadeIn,FadeInDown,FadeOut } from 'react-native-reanimated';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import useLog from '../store/Auth';


const Profile = ({navigation,route}) =>{

    //Login page
    const [click,setClick] = useState(false);
    let idNum=0;
    const [username,setUsername]=  useState("");
    const [password,setPassword]=  useState("");
    const {addUser} = useLog();
    const {checkExist}=useLog();

    const aggiungiUtente = () =>
    {
        addUser({username,password});
        console.log(checkExist({username,password}));
        navigation.goBack();
    }

  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../images/background.jpg')} style={styles.banner}>

        <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()}>
        <Image source={require('../images/Logo.png')} style={styles.image} resizeMode='contain' />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.inputView}>
            <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}
        autoCapitalize='none' />
            <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
        autoCapitalize='none'/>
        </Animated.View>


        <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.buttonView}>
            <Pressable style={styles.button} onPress={aggiungiUtente}>
                <Text style={styles.buttonText}>SIGN-UP</Text>
            </Pressable>
        </Animated.View>
        
        <TouchableOpacity onPress={aggiungiUtente}>
        <Text style={styles.footerText}>Have Account?<Text style={styles.signup}>  Login </Text></Text>
        </TouchableOpacity>

        </ImageBackground>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container : {
    alignItems : "center",
  },
  image : {
    paddingTop:300,
    height : 160,
    width : 170,
    alignSelf:'center'
  },
  title : {
    fontSize : 30,
    fontWeight : "bold",
    textTransform : "uppercase",
    textAlign: "center",
    paddingVertical : 150,
    color : "black"
  },
  inputView : {
    gap : 15,
    width : "100%",
    paddingHorizontal : 40,
    marginBottom  :5
  },
  input : {
    height : 50,
    paddingHorizontal : 20,
    borderColor : "purple",
    borderWidth : 1,
    borderRadius: 7
  },
  rememberView : {
    width : "100%",
    paddingHorizontal : 50,
    justifyContent: "space-between",
    alignItems : "center",
    flexDirection : "row",
    marginBottom : 8
  },
  switch :{
    flexDirection : "row",
    gap : 1,
    justifyContent : "center",
    alignItems : "center"
    
  },
  rememberText : {
    fontSize: 13
  },
  forgetText : {
    fontSize : 11,
    color : "black"
  },
  button : {
    backgroundColor : "purple",
    height : 45,
    borderColor : "gray",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold"
  }, 
  buttonView :{
    width :"100%",
    paddingHorizontal : 50
  },
  optionsText : {
    textAlign : "center",
    paddingVertical : 10,
    color : "gray",
    fontSize : 13,
    marginBottom : 6
  },
  mediaIcons : {
    flexDirection : "row",
    gap : 15,
    alignItems: "center",
    justifyContent : "center",
    marginBottom : 23
  },
  icons : {
    width : 40,
    height: 40,
  },
  footerText : {
    textAlign: "center",
    color : "gray",
  },
  signup : {
    color : "black",
    fontSize : 13
  },
  banner:
  {
    height:800,
    width:400,
  }
})

export default Profile;