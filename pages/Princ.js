import { StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import Iconogrh from "../components/Iconogrh";
import ShowCash from "../components/ShowCash";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Princ = ({ navigation: { navigate } }) => {
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    try {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    } catch {
      console.log("Error Fonts");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <View style={styles.Solde}>
        <ShowCash />
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
  Operation: {
    flex: 3,
    backgroundColor: "white",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 42,
  },
});
