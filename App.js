import React, { useState } from "react";
import {
  StyleSheet,
} from "react-native";
import LogIn from "./src/Screens/LogIn";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Footer from "./src/Component/Footer";
import Register from "./src/Screens/Register";
import Reset from "./src/Screens/Reset";
import Forgot from "./src/Screens/Forgot";
import Home from "./src/Screens/Home";
import DrawerContent from "./src/Component/DrawerContent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Draw from "./src/Navigator/Draw";
import AuthNavigator from "./src/Navigator/AuthNavigator";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState([]);

  return (
    <NavigationContainer>
      {token ? <Draw user={user} setToken={setToken}/> : <AuthNavigator setToken={setToken} setUser={setUser}/>}
    </NavigationContainer>
  );
};

export default App;

