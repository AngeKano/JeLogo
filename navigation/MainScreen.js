import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Historique from "../pages/Historique";
import Compte from "../pages/Compte";
import AccScreens from "./AccScreens";
import CustomDrawerContent from "../components/DrawerCustom";
import HeaderRight from "../components/HeaderRight";

const Drawer = createDrawerNavigator();

const MainScreen = ({ navigation: { navigate } }) => {
  return (
    <Drawer.Navigator
      initialRouteName="accueil"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTitle: "",
      }}
    >
      <Drawer.Screen
        name="AccScreens"
        component={AccScreens}
        options={{
          headerRight: () => <HeaderRight />,
        }}
      />
      <Drawer.Screen
        name="historique"
        component={Historique}
        options={{
          headerRight: () => <HeaderRight />,
        }}
      />
      <Drawer.Screen name="compte" component={Compte} />
    </Drawer.Navigator>
  );
};

export default MainScreen;
