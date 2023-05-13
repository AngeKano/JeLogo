import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VerificationN1 from "../pages/VerificationN1";
import VerificationN21 from "../pages/VerificationN21";
import VerificationN22 from "../pages/VerificationN22";
import VerificationN3 from "../pages/VerificationN3";
import MainScreen from "./MainScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="VerificationN1"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="verificationN1" component={VerificationN1} />
      <Stack.Screen name="verificationN21" component={VerificationN21} />
      <Stack.Screen name="verificationN22" component={VerificationN22} />
      <Stack.Screen name="verificationN3" component={VerificationN3} />
      <Stack.Screen name="mainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
