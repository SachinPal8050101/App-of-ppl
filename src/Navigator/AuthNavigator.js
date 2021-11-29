import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Forgot from "../Screens/Forgot";
import Register from "../Screens/Register";
import LogIn from "../Screens/LogIn";

const Stack = createNativeStackNavigator();

const AuthNavigator = ({ setToken ,setUser}) => (
  <Stack.Navigator>
    <Stack.Screen name="LogIn" options={{ headerShown: false }}>
      {(props) => <LogIn {...props} setToken={setToken} setUser={setUser}/>}
    </Stack.Screen>
    <Stack.Screen name="Register" options={{ headerShown: false }}>
      {(props) => <Register {...props} setUser={setUser} setToken={setToken} />}
    </Stack.Screen>
    <Stack.Screen
      name="Forgot"
      component={Forgot}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
