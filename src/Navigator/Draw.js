import React,{useState} from 'react'
import {Text,View,StyleSheet,Header,Image,TouchableOpacity,Button,TextInput, ScrollView,Pressable,KeyboardAvoidingView} from 'react-native'
import LogIn from '../Screens/LogIn'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Footer from '../Component/Footer'
import Register from '../Screens/Register'
import Reset from '../Screens/Reset'
import Forgot from '../Screens/Forgot'
import Home from '../Screens/Home'
import DrawerContent from '../Component/DrawerContent'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Draw=({user,setToken})=>{  
  return(
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props} user={user} setToken={setToken}/>}>
       <Drawer.Screen
      options={{
        title:'Footer',
        headerStyle: {
          backgroundColor: '#F47B13',
        },
        headerTintColor: '#fff',
      }} name="Footer" component={Footer} />
      <Drawer.Screen
      options={{
        title:'Home',
        headerStyle: {
          backgroundColor: '#F47B13',
          headerShown:false
        },
        headerTintColor: '#fff',
      }} name="Home" component={Home} />
      <Drawer.Screen
      options={{
        title:'LogIn',
        headerStyle: {
          backgroundColor: '#F47B13',
        },
        headerTintColor: '#fff',
      }} name="LogIn" component={LogIn} />
      <Drawer.Screen
      options={{
        title:'Forgot',
        headerStyle: {
          backgroundColor: '#F47B13',
        },
        headerTintColor: '#fff',
      }} name="Forgot" component={Forgot} />
      <Drawer.Screen
      options={{
        title:'Register',
        headerStyle: {
          backgroundColor: '#F47B13',
        },
        headerTintColor: '#fff',
      }} name="Register" component={Register} />
      
    </Drawer.Navigator>
    // <View>
    //   <Text>gggg</Text>
    // </View>
  );
}
export default Draw;


  // <Drawer.Navigator drawerContent={props=><DrawerContent {...props} setToken={props.setToken} user={props.user}/>}>
    //   <Drawer.Screen
    //   options={{
    //     title:'Home',
    //     headerStyle: {
    //       backgroundColor: '#F47B13',
    //       headerShown:false
    //     },
    //     headerTintColor: '#fff',
    //   }} name="Home" component={Home} />
    //   <Drawer.Screen
    //   options={{
    //     title:'LogIn',
    //     headerStyle: {
    //       backgroundColor: '#F47B13',
    //       headerShown:false
    //     },
    //     headerTintColor: '#fff',
    //   }} name="LogIn" component={LogIn} />
    //   <Drawer.Screen
    //   options={{
    //     title:'Forgot',
    //     headerStyle: {
    //       backgroundColor: '#F47B13',
    //       headerShown:false
    //     },
    //     headerTintColor: '#fff',
    //   }} name="Forgot" component={Forgot} />
    //   <Drawer.Screen
    //   options={{
    //     title:'Register',
    //     headerStyle: {
    //       backgroundColor: '#F47B13',
    //       headerShown:false
    //     },
    //     headerTintColor: '#fff',
    //   }} name="Register" component={Register} />
    //    <Drawer.Screen
    //   options={{
    //     title:'Footer',
    //     headerStyle: {
    //       backgroundColor: '#F47B13',
    //       headerShown:false
    //     },
    //     headerTintColor: '#fff',
    //   }} name="Footer" component={Footer} />
    // </Drawer.Navigator>






