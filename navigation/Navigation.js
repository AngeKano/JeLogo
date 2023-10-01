import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import VerificationN1 from "../pages/VerificationN1";
import VerificationN21 from "../pages/VerificationN21";
import VerificationN22 from "../pages/VerificationN22";
import VerificationN3 from "../pages/VerificationN3";
import MainScreen from "./MainScreen";
import Login from "../pages/Login";
import Code from "../pages/Code";
import ContactsScreen from "../pages/Contacts";
import Identification from "../pages/Identification";
import Identification1 from "../pages/Identification1";
import Condrat from "../pages/Condrat";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="VerificationN1"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="verificationN1" component={VerificationN1} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="code" component={Code} />
        <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
        <Stack.Screen name="verificationN21" component={VerificationN21} />
        <Stack.Screen name="verificationN22" component={VerificationN22} />
        <Stack.Screen name="verificationN3" component={VerificationN3} />
        <Stack.Screen name="Identification" component={Identification} />
        <Stack.Screen name="Identification1" component={Identification1} />
        <Stack.Screen name="mainScreen" component={MainScreen} />
        <Stack.Screen name="Condrat" component={Condrat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
