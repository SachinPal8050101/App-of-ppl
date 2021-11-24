import React from 'react'
import {Text,View,StyleSheet,Header,Image,TouchableOpacity,Button,TextInput,Pressable} from 'react-native'
 
const Footer=()=>{
     return(
       <View>
          <View style={styles.container}>
               <Text style={{color:'white'}}>Copyright © Pet-Socail</Text>
          </View>
       </View>
     );
}
export default Footer;
 
const styles=StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    // height:50,
    width:'100%',
    backgroundColor:'#F47B13',
    padding:15,
  }
})