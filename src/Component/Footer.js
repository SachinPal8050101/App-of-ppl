import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Header,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import UploadPostContent from "../Component/UploadPostContent";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Footer = (props) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        tabStyle: {
          backgroundColor: "#F47B13",
        },
      }}
    >
      <Tab.Screen
        name=" "
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#ffffff",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color="#fff" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name=" ."
        component={UploadPostContent}
        options={{
          tabBarLabel: "UploadPost",
          tabBarColor: "#009387",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={'comments'} size={27} color="#fff" solid/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Footer;

const styles = StyleSheet.create({
  container: {
  },
});
