import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Princ from "../pages/Princ";
import Accueil from "../pages/Accueil";
import Pass from "../pages/Pass";
import Opr1 from "../pages/Opr1";
import Opr2 from "../pages/Opr2";
import Opr3 from "../pages/Opr3";
import Opr4 from "../pages/Opr4";
import Opr5 from "../pages/Opr5";
import Scan from "../pages/Scan";
import Forfait from "../pages/Forfait";
import Abonement from "../pages/Abonement";

const Stack = createNativeStackNavigator();

const AccScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Princ"
      screenOptions={{
        headerTransparent: true,
        headerShown: false,
        headerTitle: "",
      }}
    >
      <Stack.Screen name="Princ" component={Princ} />
      <Stack.Screen name="Accueil" component={Accueil} />
      <Stack.Screen name="Pass" component={Pass} />
      <Stack.Screen name="Forfait" component={Forfait} />
      <Stack.Screen name="Abonement" component={Abonement} />
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="Opr1" component={Opr1} />
      <Stack.Screen name="Opr2" component={Opr2} />
      <Stack.Screen name="Opr3" component={Opr3} />
      <Stack.Screen name="Opr4" component={Opr4} />
      <Stack.Screen name="Opr5" component={Opr5} />
    </Stack.Navigator>
  );
};

export default AccScreens;
