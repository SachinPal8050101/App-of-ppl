import React from 'react'
import {Text,View,StyleSheet,Header,Image,TouchableOpacity,Button,TextInput,Pressable} from 'react-native'
 
const UploadPostContent=()=>{
   return (
    <View style={styles.container}>
            
        <View>
          <Text>Title</Text>
          <TextInput type='text' style={{backgroundColor:'#fff'}}/>
        </View>
        <View>
          <Text>Category</Text>
          <TextInput style={{backgroundColor:'#fff'}}/>
        </View>
        <View>
          <Text>Image</Text>
          <TextInput style={{backgroundColor:'#fff'}}/>
        </View>
        <View>
        <Pressable style={{backgroundColor:'#fff'}}>
          <Text>Upload</Text>
        </Pressable>
        </View>
            
     </View>
   );
}
export default UploadPostContent;

const styles=StyleSheet.create({
  container:{
    padding:20,

    width:'100%',
    backgroundColor:'#F47B13',
   borderColor:'yellow',
   borderWidth:1
  },
})
