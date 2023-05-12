import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Historique from "../pages/Historique";
import Compte from "../pages/Compte";
import AccScreens from "./AccScreens";
import { AntDesign } from "@expo/vector-icons";
import CustomDrawerContent from "../components/DrawerCustom";

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
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 5, marginRight: 10 }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "rgba(3, 114, 193, 0.43)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="bells" size={17} color="white" />
              </View>
              <Pressable onPress={() => navigate("compte")}>
                <Image
                  source={require("../assets/icons/UserImage.png")}
                  style={{ width: 40, height: 40 }}
                />
              </Pressable>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="historique"
        component={Historique}
        options={{
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 5, marginRight: 10 }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "rgba(3, 114, 193, 0.43)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/Group19.png")}
                  style={{ width: 14, height: 17 }}
                />
              </View>
              <Pressable onPress={() => navigate("compte")}>
                <Image
                  source={require("../assets/icons/UserImage.png")}
                  style={{ width: 40, height: 40 }}
                />
              </Pressable>
            </View>
          ),
        }}
      />
      <Drawer.Screen name="compte" component={Compte} />
    </Drawer.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
