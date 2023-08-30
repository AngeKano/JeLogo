import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Historique from "../pages/Historique";
import Compte from "../pages/Compte";
import AccScreens from "./AccScreens";
import CustomDrawerContent from "../components/DrawerCustom";
import HeaderRight from "../components/HeaderRight";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation: { navigate, replace } }) => {
  return (
    <Tab.Navigator
      // initialRouteName="Accueil"
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTitle: "",
      }}
    >
      <Tab.Screen
        name="AccScreens"
        component={AccScreens}
        options={{
          headerRight: () => (
            <HeaderRight navigate={navigate} replace={replace} />
          ),
        }}
      />
      <Tab.Screen
        name="Historique"
        component={Historique}
        options={{
          headerRight: () => <HeaderRight navigate={navigate} />,
        }}
      />
      <Tab.Screen name="compte" component={Compte} />
    </Tab.Navigator>
  );
};

export default MainScreen;
