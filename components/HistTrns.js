import { StyleSheet, Text, View, Image } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const HistTrns = (props) => {

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
    <View onLayout={onLayoutRootView} style={styles.container}>
      <Image
        source={props.img}
        style={{ borderRadius: 200, width: 45, height: 45 }}
      />

      <View style={styles.allTxt}>
        <Text style={styles.txt1}>Dépôt sur compte</Text>
        <Text style={styles.txt2}>20h 30mn</Text>
      </View>
      <Text style={styles.txt3}>10 000 FCFA</Text>
      <AntDesign name="right" size={16} color="black" />
    </View>
  );
};

export default HistTrns;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 17,
  },
  txt1: {
    fontFamily: "Nunito-Regular",
    fontSize: 15,
  },
  txt2: {
    fontFamily: "Nunito-Light",
    fontSize: 10,
  },
  txt3: {
    fontFamily: "Nunito-Bold",
    fontSize: 15,
  },
});
