import React, { useState, useEffect } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image, Drawer } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
const DrawerContent = (props) => {
 const [val,setVal]=useState({
   username:'',
   firstname:'',
   lastname:''
 })
  const remove=async ()=>{
     try{
          await AsyncStorage.removeItem('TOKEN')
          await AsyncStorage.removeItem('TASKS')
     }
     catch(err){
       console.log('fff')
         alert(err)
     }
     finally{
          props.setToken(undefined)
     }
  }
  const load=async ()=>{
    try{
        let value= await AsyncStorage.getItem('TASKS')
        value=JSON.parse(value)
        if(value!==null)
        {
        setVal({
          firstname:value.firstname,
          lastname:value.lastname,
          username:value.username
        })
      }
    }
    catch(err){
     
        alert(err)
    }
    finally{
        //  props.setToken(undefined)
    }
 }
 load();
 useEffect(()=>{
  load();
      // console.log('dddddddd=======',postData)
 },[])

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePic}>
          {/* Image */}
          <Image source={require("../../images/post_img.png")} />
        </View>
        <View style={styles.profileDetail}>
          {/* name username */}
          <Text style={{ fontSize: 18 }}>
            {val.firstname + " " + val.lastname}
          </Text>
          <Text>{val.username}</Text>
        </View>
      </View>
      {/* others Detaiils */}
      <View style={styles.Screens}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Text style={styles.Screen}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <Text style={styles.Screen}>Creact Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("LogIn");
          }}
        >
          <Text style={styles.Screen}>Log In </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Forgot");
          }}
        >
          <Text style={styles.Screen}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>remove()}>
          <Text style={styles.signOut}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginLeft: 20,
  },
  profileContainer: {
    flexDirection: "row",
  },
  profilePic: {},
  profileDetail: {
    marginLeft: 40,
    padding: 10,
  },
  Screens: {
    marginVertical: 40,
  },
  Screen: {
    marginVertical: 20,
    fontWeight: "bold",
    fontFamily: "fontFamily",
    color: "#336666",
  },
  signOut: {
    fontWeight: "bold",
    fontFamily: "fontFamily",
    color: "#336666",
    marginVertical: 270,
  },
});
