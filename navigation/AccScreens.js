import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Princ from "../pages/Princ";
import Accueil from "../pages/Accueil";
import Opr1 from "../pages/Opr1";
import Opr2 from "../pages/Opr2";
import Opr3 from "../pages/Opr3";
import Opr4 from "../pages/Opr4";
import Opr5 from "../pages/Opr5";
import Scan from "../pages/Scan";
import Forfait from "../pages/Forfait";
import Abonement from "../pages/Abonement";
import Historique from "../pages/Historique";
import Parametre from "../pages/Parametre";
import Notification from "../pages/Notification";
import DrawerNav from "./DrawerNav";
import Page_select_Abn from "../pages/Page_select_Abn";

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
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
      <Stack.Screen name="Accueil" component={Accueil} />
      <Stack.Screen name="Forfait" component={Forfait} />
      <Stack.Screen name="Abonement" component={Abonement} />
      <Stack.Screen name="Page_select_Abn" component={Page_select_Abn} />
      <Stack.Screen name="Historique" component={Historique} />
      <Stack.Screen name="Parametre" component={Parametre} />
      <Stack.Screen name="Notification" component={Notification} />
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
