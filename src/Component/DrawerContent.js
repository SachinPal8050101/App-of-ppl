import React,{useState,useEffect} from 'react'
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import {View,Text,StyleSheet,Image,Drawer} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
const DrawerContent =(props)=>{   
  useEffect(() => {
    props.navigation.navigate('Footer')
}, []);

      console.log('kkkk',props.user.username)
        return(
          <View style={styles.container}>
               <View style={styles.profileContainer}>
                   <View style={styles.profilePic} >
                       {/* Image */}
                       <Image source={require('../../images/post_img.png')}/>
                   </View>
                   <View style={styles.profileDetail}>
                       {/* name username */}
        <Text style={{fontSize:18}}>{props.user.lastname+' '+props.user.lastname}</Text>
        <Text>{props.user.username}</Text>
                   </View>
               </View>
               {/* others Detaiils */}
               <View style={styles.Screens}>
                   <TouchableOpacity  onPress={()=>{props.navigation.navigate('Home')}}><Text style={styles.Screen}>Home</Text></TouchableOpacity>
                   <TouchableOpacity  onPress={()=>{props.navigation.navigate('Register')}}><Text style={styles.Screen}>Creact Account</Text></TouchableOpacity>
                   <TouchableOpacity  onPress={()=>{props.navigation.navigate('LogIn')}}><Text style={styles.Screen}>Log In </Text></TouchableOpacity>
                   <TouchableOpacity  onPress={()=>{props.navigation.navigate('Forgot')}}><Text style={styles.Screen}>Forgot Password</Text></TouchableOpacity>
                   {/* <TouchableOpacity  onPress={()=>{props.navigation.navigate('Footer')}}><Text style={styles.Screen}>Forgot Password</Text></TouchableOpacity> */}
                   
                    
                  

                   <TouchableOpacity onPress={()=>props.setToken(false)}><Text style={styles.signOut}>Sign Out</Text></TouchableOpacity>

                   {/* <DrawerItem
                       icon={({color, size}) => (
                        <Icon 
                        name="settings-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Settings"
                    onPress={() => {props.navigation.navigate('Home')}}
                   /> */}
               </View>
          </View>
        );
}
export default DrawerContent ;

const styles=StyleSheet.create({
  container:{
     marginVertical:30,
     marginLeft:20
  },
  profileContainer:{
      flexDirection:'row'
  },
  profilePic:{

  },
  profileDetail:{
    marginLeft:40,
    padding:10
  },
  Screens:{
    marginVertical:40
  },
  Screen:{
      marginVertical:20,
      fontWeight:'bold',
      fontFamily: 'fontFamily',
     color: '#336666',
  },
  signOut:{
    fontWeight:'bold',
    fontFamily: 'fontFamily',
   color: '#336666',
   marginVertical:270
  }
})