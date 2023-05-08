import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useCallback, useState } from "react";
import Iconogrh from "../components/Iconogrh";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Princ = ({ navigation: { navigate } }) => {
  const [cashVisible, setCashVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
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
    <View onLayout={onLayoutRootView} style={styles.container}>
      <View style={styles.Solde}>
        <Pressable
          onPress={() => setCashVisible(!cashVisible)}
          style={styles.cash}
        >
          <View
            style={[
              styles.cashBtn,
              {
                display: cashVisible ? null : "none",
              },
            ]}
          >
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: "white",
              }}
            ></View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: "white",
              }}
            ></View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: "white",
              }}
            ></View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: "white",
              }}
            ></View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: "white",
              }}
            ></View>
          </View>
          <Text
            style={[
              styles.cashTxt,
              {
                display: cashVisible ? "none" : null,
              },
            ]}
          >
            123.233 FCFA
          </Text>
        </Pressable>
        <Text style={styles.sldTxt}>Solde disponible</Text>
      </View>
      <View style={styles.Operation}>
        <Iconogrh navigate={navigate} />
      </View>
    </View>
  );
};

export default Princ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0372C1",
  },
  Solde: {
    flex: 1,
  },
  cash: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  cashBtn: {
    flexDirection: "row",
    gap: 5,
  },
  cashTxt: {
    fontSize: 25,
    fontFamily: "Nunito-Bold",
    color: "white",
    textAlign: "center",
  },
  cashEye: {
    flexDirection: "row",
  },
  sldTxt: {
    fontFamily: "Nunito-SemiBold",
    color: "white",
    marginTop: 36,
    textAlign: "center",
  },
  Operation: {
    flex: 3,
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 42,
    paddingHorizontal: 20,
  },
});
