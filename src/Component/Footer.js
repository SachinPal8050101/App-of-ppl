import React from 'react'
import {Text,View,StyleSheet,Header,Image,TouchableOpacity,Button,TextInput,Pressable} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'
import UploadPostContent from '../Component/UploadPostContent'
import Icon from 'react-native-vector-icons/Ionicons';
const Footer=(props)=>{
  console.log(props)
  const Tab = createBottomTabNavigator();
     return(
      <Tab.Navigator tabBarOptions={{
         showLabel:false,
         tabStyle:{
        backgroundColor:'#F47B13',
         }
      }}>
        <Tab.Screen name=" " component={Home}  options={{
          tabBarLabel: 'Home',
          tabBarColor: '#ffffff',
          headerShown:false,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color="#fff" size={26} />
          ),
        }} />
        <Tab.Screen name=" ." component={UploadPostContent}  options={{
          tabBarLabel: 'UploadPost',
          tabBarColor: '#009387',
          headerShown:false,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color="#fff" size={26} />
          ),
        }}/>
      </Tab.Navigator>
   
     );
}
export default Footer;
 
const styles=StyleSheet.create({
  container:{
    // justifyContent:'center',
    // alignItems:'center',
    // // height:50,
    // width:'100%',
     //backgroundColor:'#F47B13',
    // padding:15,
  }
})