import React,{useState} from 'react'
import {Text,View,StyleSheet,Header,Image,TouchableOpacity,Button,TextInput, ScrollView,Pressable,KeyboardAvoidingView} from 'react-native'
import LogIn from './android/Screens/LogIn'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Footer from './android/Screens/Component/Footer'
import Register from './android/Screens/Register'
import Reset from './android/Screens/Reset'
import Forgot from './android/Screens/Forgot'
import Home from './android/Screens/Home'
import DrawerContent from './android/Screens/Component/DrawerContent'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const App=()=>{  
  const [token,setToken]=useState(false)
  return(
    <NavigationContainer screenOptions={{title:''}}>
      {token? (
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props} setToken={setToken}/>}>
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
    </Drawer.Navigator>)
    : (<Stack.Navigator>
           <Stack.Screen name="LogIn">
           {props => <LogIn {...props} setToken={setToken} />}
           </Stack.Screen>
            {/* <Stack.Screen name="LogIn" token={token} component={LogIn}/> */}
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Forgot" component={Forgot}/>
        </Stack.Navigator>
      )
     }
     
     <View style={styles.footerComponent}>
    <Footer/>
    </View>
  </NavigationContainer>
  );
}
export default App;

const styles=StyleSheet.create({
  footerComponent:{
    //display:'fixed'
    //position: 'absolute', left: 0, right: 0, bottom: 0
  }
})







