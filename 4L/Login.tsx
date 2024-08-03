import React, { useState } from 'react'
import { Alert, Button, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Animated,{ ColorSpace, FadeIn,FadeInDown,FadeOut } from 'react-native-reanimated';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import useLog from './store/Auth';

const Profile = () =>{

    //Login page
    const navigation = useNavigation();
    const [click,setClick] = useState(false);
    const [username,setUsername]=  useState("");
    const [password,setPassword]=  useState("");
    const {checkExist} = useLog();
    const {getUsers}=useLog();

    const val = () =>
    {
         let test = checkExist({username,password});
         
         if (test)
         {
           (navigation as any).navigate ('BottomTab',{username:username});
         }
         else
         {
          Alert.alert("Username or Password not correct");
         }

         /*console.log(getUsers());
         console.log(test);*/
    }

  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./images/background.jpg')} style={styles.banner}>

        <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()}>
        <Image source={require('./images/Logo.png')} style={styles.image} resizeMode='contain' />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.inputView}>
            <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false}
        autoCapitalize='none' />
            <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
        autoCapitalize='none'/>
        </Animated.View>


        <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.rememberView}>
            <View style={styles.switch}>
                <Switch  value={click} onValueChange={setClick} trackColor={{true : "pink" , false : "gray"}} />
                <Text style={styles.rememberText}>Remember Me</Text>
            </View>
            <View>
                <Pressable onPress={() => Alert.alert("Forget Password!")}>
                    <Text style={styles.forgetText}>Forgot Password?</Text>
                </Pressable>
            </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.buttonView}>
            <Pressable style={styles.button} onPress={()=>{val()}}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
            <Text style={styles.optionsText}>OR LOGIN WITH</Text>
        </Animated.View>
        
        <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={styles.mediaIcons}>
                <Image source={require('./images/LogoFb.png')} style={styles.icons}   />
                <Image source={require('./images/LogoGoo.png')} style={styles.icons}  />
                <Image source={require('./images/LogoX.png')} style={styles.icons}  />
        </Animated.View>
         
         <TouchableOpacity onPress={()=>(navigation as any).navigate('SignUp')}>
         <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}>  Sign Up</Text></Text>
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
    paddingVertical : 20,
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