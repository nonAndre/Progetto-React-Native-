import { View, Text, ScrollView, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

type Post =
{
    id:number,
    userId:number,
    title:string,
    body:string,
}

const test = () => {

    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState<Post[]>([]);
  
    const loadData = ()=>
    {
      setLoading(true),
      axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then(response=>{
          setPosts(response.data)
      })
      .catch(()=>{console.log("error");})
      .finally(()=>{setLoading(false);})
    }
    
    useEffect(()=>
  {
     if (loading) return;
     loadData();
  },[]);  

 
    return (

      
    <SafeAreaView style={{padding:24}}>
      {!loading ? <ScrollView>
        {
          posts.map(post=>(
            <View key={post.id}>
              <Text>{post.title}</Text>
              <Text>{post.body}</Text>
            </View>
          ))
        }
      </ScrollView>:<View><ActivityIndicator color="black" size="small" /></View>}
    </SafeAreaView>
   
    
      );
}

export default test