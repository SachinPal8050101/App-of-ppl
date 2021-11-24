import React,{useState} from 'react'
import {Text,View,StyleSheet,Header,Image,TouchableOpacity,Button,TextInput,Pressable,ScrollView} from 'react-native'
 import UploadPost from './Component/UploadPost'
import UploadPostContent from './Component/UploadPostContent';
import Post from '../Screens/Component/Post'
const Home=()=>{
  const [upload,setUpload]=useState(false)
   return (
    <View style={styles.container}>
        <View style={styles.uploadPost}>
         <UploadPost setUpload={setUpload} upload={upload}/>
         </View>
         {upload?(<View style={styles.UploadPostContent}>
         <UploadPostContent/>
         </View>): null}

         <View style={styles.post}>
           <ScrollView>
         <Post setUpload={setUpload} upload={Post}/>
         <Post setUpload={setUpload} upload={Post}/>
         <Post setUpload={setUpload} upload={Post}/>
         <Post setUpload={setUpload} upload={Post}/>
         </ScrollView>
         </View>
     </View>
   );
}
export default Home;

const styles=StyleSheet.create({
  container:{
    margin:10,
        flex:1,
  },
 uploadPost:{

 },
 post:{
  // marginVertical:10,
  marginTop:40
    
    // backgroundColor:'yellow'
 }
})
