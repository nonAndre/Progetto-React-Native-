import { StyleSheet, TouchableOpacity ,Image, ScrollView} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { collectManifestSchemes } from 'expo-linking';

const userNames = [
  {name:"La tua storia",},
  {
    name:"user1",
  },
  {
  
    name:"user2",
  },
  {
    
    name:"user3",
  },
  {
  
    name:"user4",
  },
  {
    name:"user5",
  },{
    name:"user6",
  },
  {
    name:"user7",
  }
];


const tshirt =[{name:'Chaos Shirt',path:require('@/assets/images/Tshirt/maglia1.jpg'),profName:'Clothes',desc:'This smart black cotton t-shirt is embellished with a graphic printed Louis Vuitton signature and an embroidered LV Jumping Dog motif. This playful image references the universe of the artist Tyler who collaborated on this collection. This easy piece in light cotton jersey is easy to associate with casual everyday looks.',id:5,},
  {name:'Chaos Rev Shirt',path:require('@/assets/images/Tshirt/maglia2.jpg'),profName:'Clothes',desc:'This smart black cotton t-shirt is embellished with a graphic printed Louis Vuitton signature and an embroidered LV Jumping Dog motif. This playful image references the universe of the artist Tyler who collaborated on this collection. This easy piece in light cotton jersey is easy to associate with casual everyday looks.',id:6,},
  {name:'Vintage Shirt',path:require('@/assets/images/Tshirt/maglia3.jpg'),profName:'Clothes',desc:'This smart black cotton t-shirt is embellished with a graphic printed Louis Vuitton signature and an embroidered LV Jumping Dog motif. This playful image references the universe of the artist Tyler who collaborated on this collection. This easy piece in light cotton jersey is easy to associate with casual everyday looks.',id:7, }, 
  {name:'Brown Shirt',path:require('@/assets/images/Tshirt/maglia4.jpg'),profName:'Clothes',desc:'This smart black cotton t-shirt is embellished with a graphic printed Louis Vuitton signature and an embroidered LV Jumping Dog motif. This playful image references the universe of the artist Tyler who collaborated on this collection. This easy piece in light cotton jersey is easy to associate with casual everyday looks.',id:8,}, ];

export default function TabOneScreen() {
  
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

         <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>(navigation as any).navigate('test')}>
         <Text style={styles.textStyle}>Per te</Text>
         <Ionicons name="chevron-down-outline" size={20} style={{alignSelf:"center"}}></Ionicons>
         </TouchableOpacity>

         <View style={{flexDirection:"row",padding:10,gap:10}}>

             <TouchableOpacity style={{flexDirection:"row"}}>
               <Ionicons name="heart-outline" size={30} style={{alignSelf:"center"}}></Ionicons>
             </TouchableOpacity>
             
             <TouchableOpacity style={{flexDirection:"row"}}>
               <Ionicons name="send-outline" size={30} style={{alignSelf:"center"}}></Ionicons>
             </TouchableOpacity>
         </View>
      </View>

      <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.stories}>
        {userNames.map((item,index)=>(
            <TouchableOpacity 
              key={index}
              style={styles.storiesButton}>
              <Image source={require("../../assets/images/profPic.jpg")} style={styles.pic}/>
              <Text>{item.name as any}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

     
     <ScrollView>

      <View>
        {
          tshirt.map((item,index)=>(
            <View  style={styles.postContainer}>
              <View style={{height:50,flexDirection:"column",}}>
                <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
                <Image source={require("../../assets/images/profPic.jpg")} style={styles.pic2}/>
                <Text style={{fontWeight:"bold"}}>{item.profName}</Text>
                </TouchableOpacity>
              </View>
              
              <View key={item.id}>
                <Image source={item.path} style={{height:450,width:400}}/>
              </View>  
             
             <View style={{flexDirection:"row",padding:10,justifyContent:"space-between"}}>
              <View style={{flexDirection:"row",alignItems:"center",gap:7}}>
               <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
                <Ionicons name="heart-outline" size={20}/>
                <Text>10000</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
                <Ionicons name="chatbubble-outline" size={20}/>
                <Text>10000</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
                <Ionicons name="send-outline" size={20}/>
                <Text>10000</Text>
               </TouchableOpacity>
               </View>

               <TouchableOpacity>
               <Ionicons name="bookmark-outline" size={20}/>
              </TouchableOpacity>
             </View>
             
             <View style={{flexDirection:"row"}}>
              <Text style={{fontWeight:"bold"}}>{item.name}</Text>
              <Text>{item.desc}</Text>
             </View>

            </View>
          ))
        }
      </View>
     </ScrollView>
     

    
    </SafeAreaView>
  );
}

/*<Text style={{padding:10}}>{item.profName}</Text>
            <Text style={{padding:10}}>{item.name}</Text>
            <Image source={item.path} style={{width:400,height:400}}/>*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:
  {
     height:55,
     backgroundColor:"white",
     flexDirection:"row",
     justifyContent:"space-between",
  },
  textStyle:
  {
    alignSelf:"center",
    fontWeight:"bold",
    fontSize:20,
    padding:10,
  },
  stories:
  { 
    height:108,
    backgroundColor:"white",
    flexDirection:"row",
  },
  pic:
  {
    alignSelf:"center",
    height:50,
    width:50,
  },
  pic2:
  {
    height:50,
    width:50,
  },
  storiesButton:
  {
    padding:10,
    gap:6,
  },
  postContainer:
  {
    height:680,
    backgroundColor:"white",
  },

});
