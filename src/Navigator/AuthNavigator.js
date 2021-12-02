import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Forgot from "../Screens/Forgot";
import Register from "../Screens/Register";
import LogIn from "../Screens/LogIn";

const Stack = createNativeStackNavigator();

const AuthNavigator = ({ setToken ,setUser,user}) => (
  <Stack.Navigator>
    <Stack.Screen name="LogIn" options={{ headerShown: false }}>
      {(props) => <LogIn {...props} setToken={setToken} setUser={setUser} user={user}/>}
    </Stack.Screen>
    <Stack.Screen name="Register" options={{ headerShown: false }}>
      {(props) => <Register {...props} setUser={setUser} setToken={setToken} user={user} />}
    </Stack.Screen>
    <Stack.Screen
      name="Forgot"
      component={Forgot}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
