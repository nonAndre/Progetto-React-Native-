import { Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        style={{height:'100%',width:'100%'}} 
        source={require('@/assets/images/back.png')}
      >
        <View style={styles.topHeader}>
          <TouchableOpacity style={{width:'10%',flexDirection:'row',padding:4,position:'relative'}}>
            <Image style={styles.iconHeader} source={require('@/cr-ui-master/named/heist.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}>
             <Image style={styles.iconHeader} source={require('@/cr-ui-master/named/star-level.png')} />
             <Text style={styles.text}>1/100</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}>
             <Image style={styles.iconHeader2} source={require('@/cr-ui-master/ui_out.trim/ui_sprite_0281.png')} />
             <Text style={styles.text}>545</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}>
             <Image style={styles.iconHeader} source={require('@/cr-ui-master/ui_out.trim/ui_sprite_0262.png')}/>
             <Text style={styles.text}>545</Text>
          </TouchableOpacity>

        </View>
        
        <View style={{backgroundColor:'transparent',flexDirection:'row',paddingVertical:41,padding:4,gap:2}}>
          <View style={{width:'70%',justifyContent:'space-between',backgroundColor:'#1A334C',flexDirection:'row',padding:4,borderRadius:4}}>
            <View style={{backgroundColor:'transparent',flexDirection:'row',}}>
               <Image style={styles.iconHeader} source={require('@/cr-ui-master/league/ui_sprite_0991.png')}/>
               <Text style={styles.text}>CARLO</Text>
            </View >
               
            <View style={{backgroundColor:'black',width:'30%',borderRadius:4,justifyContent:'space-between',flexDirection:'row'}}>
              <Image style={styles.iconHeader} source={require('@/cr-ui-master/named/trophy-ladder.png')}/>
              <Text style={[styles.text,{color:'yellow',alignSelf:'center'}]}>30</Text>
            </View>
          </View>

         <View style={{width:'15%',backgroundColor:'#1A334C',borderRadius:4,justifyContent:"center"}}>
             <Image style={[styles.iconHeader,{alignSelf:"center"}]} source={require('@/cr-ui-master/named_notrans/social.png')}/>
         </View>

         <View style={{width:'14%',backgroundColor:'#1A334C',borderRadius:4,justifyContent:"center"}}>
            <Ionicons name="menu-outline" size={40} color={"white"} style={{alignSelf:"center"}}/>
         </View>

        </View >
          
         <View style={{justifyContent:"center",alignItems:"center",paddingVertical:10,backgroundColor:'transparent'}}>
           <Image style={{width:300,height:310,}} source={require('@/assets/images/arena.png')}/>
         </View>

         <View style={{backgroundColor:'transparent',flexDirection:'row',padding:4,gap:4}}>
            <TouchableOpacity style={{width:'50%',backgroundColor:"#ffb800",justifyContent:"center",alignItems:"center",borderRadius:4,height:70}}>
               <Text style={{color:'white',fontWeight:'bold'}}>BATTLE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width:'50%',backgroundColor:"#00b0ff",justifyContent:"center",alignItems:"center",borderRadius:4,height:70}}>
               <Text style={{color:'white',fontWeight:'bold'}}>PARTY!</Text>
            </TouchableOpacity>
         </View>
        
         <View style={{flexDirection:"row",backgroundColor:"#transparent",height:165,padding:4,gap:4}}>
           <TouchableOpacity style={{height:140,width:'25%',backgroundColor:"#2370A1",paddingVertical:30,gap:4,padding:4}}>
              <Image style={{width:100,height:70,alignSelf:"center",resizeMode:'contain'}} source={require('@/cr-ui-master/named_notrans/chest-kinglegendary.png')}/>
           </TouchableOpacity>

           <TouchableOpacity style={{height:140,width:'25%',backgroundColor:"#2370A1",paddingVertical:30,gap:4,padding:4}}>
              <Image style={{width:100,height:70,alignSelf:"center",resizeMode:'contain'}} source={require('@/cr-ui-master/named_notrans/chest-kinglegendary.png')}/>
           </TouchableOpacity>

           <TouchableOpacity style={{height:140,width:'25%',backgroundColor:"#2370A1",paddingVertical:30,gap:4,padding:4}}>
              <Image style={{width:100,height:70,alignSelf:"center",resizeMode:'contain'}} source={require('@/cr-ui-master/named_notrans/chest-kinglegendary.png')}/>
           </TouchableOpacity>

           <TouchableOpacity style={{height:140,width:'25%',backgroundColor:"#2370A1",paddingVertical:30,gap:4,padding:4}}>
              <Image style={{width:100,height:70,alignSelf:"center",resizeMode:'contain'}} source={require('@/cr-ui-master/named_notrans/chest-kinglegendary.png')}/>
           </TouchableOpacity>
         </View>

      </ImageBackground>
    </SafeAreaView>
  );
}

//2370A1

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHeader:
  {
    flexDirection:'row',
    height:40, 
    position:'absolute',
    gap:4,
    justifyContent:'space-between',
    backgroundColor:'transparent',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttons:
  {
    padding:4,
    flexDirection:'row',
    alignItems:'center',
    width:'30%',
    height:30,
    backgroundColor:'#061320',
    borderRadius:4,
  },
  iconHeader:
  {
    resizeMode:'contain',
    width:30,
    height:30,
  },
  iconHeader2:
  {
    resizeMode:'contain',
    width:30,
    height:30,
  },
  text:
  {
    color:'white',
  },
});