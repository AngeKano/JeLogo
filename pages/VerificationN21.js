import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Keyboard,
} from "react-native";
import React, { useCallback, useContext, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import VerifItem from "../components/VerifItem";
import PuceItem from "../components/PuceItem";
import Data from "../components/Data";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";

SplashScreen.preventAutoHideAsync();

// const { keyboard } = Data;

const VerificationN21 = ({ navigation: { navigate } }) => {
  const { code, setCode } = useContext(AuthContext);
  const [fontsLoaded] = useFonts({
    "Nunito-Black": require("../assets/fonts/Nunito-Black.ttf"),
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
  const tabl = [];
  const key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  while (tabl.length != 10) {
    let random = Math.floor(Math.random() * key.length);
    let bol = true;
    for (let a = 0; a < tabl.length; a++) {
      if (tabl[a] == random) {
        bol = false;
      }
    }
    if (bol) {
      tabl.push(random);
    }
  }
  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <View style={{ alignItems: "center", flex: 2 }}>
        <VerifItem text="Entrez votre code secret" />
        <PuceItem navigate={navigate} />
        <Text style={styles.TxtMdp}>Mot de passe oublié</Text>
        <TextInput
          style={{
            height: 100,
            fontSize: 20,
            borderBottomColor: "red",
            borderBottomWidth: 1,
          }}
          value={code}
        />
      </View>

      <View
        onPress={() => navigate("verificationN22")}
        style={{
          flex: 1,
          justifyContent: "center",
          gap: 8,
          backgroundColor: "red",
          width: "100%",
        }}
      >
        <View style={{ borderWidth: 10, borderColor: "gray", height: "100%" }}>
          <FlatList
            data={tabl}
            numColumns={5}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  flex: 1,
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  alignContent: "center",
                  borderWidth: 1,
                  borderColor: "green",
                }}
                onPress={() => {
                  setCode(item);
                  console.log(code);
                }}
              >
                <Text style={{ fontSize: 17, fontFamily: "Nunito-Medium" }}>
                  {item}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default VerificationN21;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    marginTop: 116,
  },
  TxtMdp: {
    fontFamily: "Nunito-Medium",
    fontSize: 17,
    marginTop: 33,
    color: "#ABB0BC",
  },
});

// <Image
//           source={require("../assets/icons/Digtal.png")}
//           style={{ width: 44, height: 52 }}
//         />
//         <Text style={{ color: "#ABB0BC", fontFamily: "Nunito-Light" }}>
//           Empreinte Digital
//         </Text>
