import React,{useState} from 'react'
import {Text,View,StyleSheet,Header,Image,TouchableOpacity,Button,TextInput, ScrollView,Pressable,KeyboardAvoidingView} from 'react-native'
import LogIn from './src/Screens/LogIn'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Footer from './src/Screens/Component/Footer'
import Register from './src/Screens/Register'
import Reset from './src/Screens/Reset'
import Forgot from './src/Screens/Forgot'
import Home from './src/Screens/Home'
import DrawerContent from './src/Screens/Component/DrawerContent'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const App=()=>{  
  const [token,setToken]=useState(false)
  const [user,setUser]=useState()
  return(
    <NavigationContainer screenOptions={{title:''}}>
      {token? (
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props} setToken={setToken} user={user}/>}>
      <Drawer.Screen
      options={{
        title:'',
        headerStyle: {
          backgroundColor: '#F47B13',
        },
        headerTintColor: '#fff',
      }} name="Home" component={Home} />
      <Drawer.Screen
      options={{
        title:'',
        headerStyle: {
          backgroundColor: '#F47B13',
        },
        headerTintColor: '#fff',
      }} name="LogIn" component={LogIn} />
      <Drawer.Screen
      options={{
        title:'',
        headerStyle: {
          backgroundColor: '#F47B13',
        },
        headerTintColor: '#fff',
      }} name="Forgot" component={Forgot} />
      <Drawer.Screen
      options={{
        title:'',
        headerStyle: {
          backgroundColor: '#F47B13',
        },
        headerTintColor: '#fff',
      }} name="Register" component={Register} />
       <Drawer.Screen
      options={{
        title:'',
        headerStyle: {
          backgroundColor: '#F47B13',
        },
        headerTintColor: '#fff',
      }} name="Footer" component={Footer} />
      
    </Drawer.Navigator>)
    : (<Stack.Navigator>
           <Stack.Screen name=" ">
           {props => <LogIn {...props} setToken={setToken} setUser={setUser} />}
           </Stack.Screen>
           <Stack.Screen name=" ">
           {props => <Register {...props} setToken={setToken} setUser={setUser} />}
           </Stack.Screen>
            {/* <Stack.Screen name="Register" component={Register}/> */}
            <Stack.Screen name="Forgot" component={Forgot}/>
        </Stack.Navigator>
        
      )
     }
    
  </NavigationContainer>
  
  );
}
export default App;

const styles=StyleSheet.create({
  footerComponent:{
    // flex:1
    //display:'fixed'
    //position: 'absolute', left: 0, right: 0, bottom: 0
  }
})







