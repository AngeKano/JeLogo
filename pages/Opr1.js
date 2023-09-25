import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

const Opr1 = ({ route, navigation: { navigate } }) => {
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

  const { label, img } = route.params;

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <Text>
        sdsd
      </Text>
    </View>
  );
};

export default Opr1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontFamily: "Nunito-Bold",
    fontSize: 30,
  },
  text2: {
    fontFamily: "Nunito-Regular",
    fontSize: 21,
    marginVertical: 40,
  },
  BtnPrinc: {
    padding: 10,
    backgroundColor: "#0372C1",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "flex-end",
    minWidth: 200,
  },
  BtnPrincTxt: {
    fontFamily: "Nunito-Medium",
    fontSize: 20,
    color: "white",
  },
});
