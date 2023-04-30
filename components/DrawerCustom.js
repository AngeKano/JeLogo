import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import React, { useCallback, useState } from "react";
import ShareItems from "./ShareItems";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

SplashScreen.preventAutoHideAsync();

const CustomDrawerContent = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Light": require("../assets/fonts/Nunito-Light.ttf"),
    "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <DrawerContentScrollView {...props}>
      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <Pressable
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={styles.centeredView}
        >
          <Pressable onPress={() => {}} style={styles.modalView}>
            <Text style={styles.txtLabel}>
              Partagez votre code parrainage avec
            </Text>
            <ShareItems />
          </Pressable>
        </Pressable>
      </Modal>

      {/* endModal */}
      <View onLayout={onLayoutRootView} style={styles.MenuContainer}>
        <ImageBackground
          style={{ height: 182 }}
          source={require("../assets/icons/BckOverlay.png")}
        ></ImageBackground>
        <View style={styles.drawerItem}>
          <Pressable
            onPress={() => {
              props.navigation.navigate("compte");
            }}
            style={styles.profil}
          >
            <Image
              source={require("../assets/icons/UserImage.png")}
              style={{ width: 80, height: 80 }}
            />
            <View style={{ marginHorizontal: 14 }}>
              <Text style={styles.TxtName}>Guy Espoir</Text>
              <Text style={styles.TxtMail}>guyespoirkouman@gmail.com</Text>
            </View>
          </Pressable>
          <DrawerItem
            label="Accueil"
            labelStyle={{ fontFamily: "Nunito-Regular" }}
            onPress={() => {
              props.navigation.navigate("Princ");
            }}
            icon={() => (
              <Image
                source={require("../assets/icons/VectorAcc.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
            style={{ marginTop: 90, paddingHorizontal: 40 }}
          />
        </View>
        <View style={styles.drawerItem}>
          <DrawerItem
            label="Compte"
            labelStyle={{ fontFamily: "Nunito-Regular" }}
            onPress={() => {
              props.navigation.navigate("compte");
            }}
            icon={() => (
              <Image
                source={require("../assets/icons/VectorUser.png")}
                style={{ width: 17, height: 20 }}
              />
            )}
            style={{ paddingHorizontal: 40 }}
          />
        </View>
        <View style={styles.drawerItem}>
          <DrawerItem
            label="Historique"
            labelStyle={{ fontFamily: "Nunito-Regular" }}
            onPress={() => {
              props.navigation.navigate("historique");
            }}
            icon={() => (
              <Image
                source={require("../assets/icons/Group40.png")}
                style={{ width: 17, height: 17 }}
              />
            )}
            style={{
              paddingHorizontal: 40,
            }}
          />
        </View>
        <View style={styles.drawerItem}>
          <DrawerItem
            label="Notification"
            labelStyle={{ fontFamily: "Nunito-Regular" }}
            onPress={() => {
              props.navigation.navigate("compte");
            }}
            icon={() => (
              <Image
                source={require("../assets/icons/Group192.png")}
                style={{ width: 17, height: 17 }}
              />
            )}
            style={{ paddingHorizontal: 40 }}
          />
        </View>
        <View style={[styles.drawerItem, { marginBottom: 40 }]}>
          <DrawerItem
            label="Historique"
            labelStyle={{ fontFamily: "Nunito-Regular" }}
            onPress={() => {
              props.navigation.navigate("historique");
            }}
            icon={() => (
              <Image
                source={require("../assets/icons/Group40.png")}
                style={{ width: 17, height: 17 }}
              />
            )}
            style={{ paddingHorizontal: 40 }}
          />
        </View>
        <View style={{ flex: 1, gap: 19, marginHorizontal: 40 }}>
          <Pressable
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            style={styles.BtnPrinc}
          >
            <Text style={styles.BtnPrincTxt}>Invitez vos amis</Text>
          </Pressable>
          <Pressable
            style={[
              styles.BtnPrinc,
              {
                backgroundColor: "none",
                borderColor: "#0372C1",
                borderWidth: 1,
              },
            ]}
          >
            <Text style={[styles.BtnPrincTxt, { color: "black" }]}>
              Déconnexion
            </Text>
          </Pressable>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  // Modal

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalView: {
    justifyContent: "flex-end",
    backgroundColor: "white",
    paddingHorizontal: 28,
    paddingVertical: 18,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  txtLabel: {
    fontSize: 17,
    fontFamily: "Nunito-Medium",
  },

  // enModal
  drawerItem: {
    flexDirection: "column",
  },
  profil: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: -15,
    zIndex: 1,
  },
  TxtName: {
    fontSize: 27,
    fontFamily: "Nunito-Bold",
  },
  TxtMail: {
    fontSize: 12,
    fontFamily: "Nunito-Light",
  },
  BtnPrinc: {
    padding: 10,
    backgroundColor: "#0372C1",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "flex-end",
  },
  BtnPrincTxt: {
    fontFamily: "Nunito-Medium",
    fontSize: 17,
    color: "white",
  },
});
