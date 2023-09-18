import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Compte1 from "../pages/Compte1";
import Compte from "../pages/Compte";

const Stack = createNativeStackNavigator();

const NavCompte = () => {
  return (
    <Stack.Navigator
      initialRouteName="Compte1"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="compte1" component={Compte1} />
      <Stack.Screen name="compte" component={Compte} />
    </Stack.Navigator>
  );
};

export default NavCompte;
