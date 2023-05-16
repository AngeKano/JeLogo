import { StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TextInput } from "react-native-gesture-handler";
import VerifItem from "../components/VerifItem";
import BtnItem from "../components/BtnItem";

SplashScreen.preventAutoHideAsync();

const VerificationN3 = ({ navigation: { replace } }) => {
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

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <VerifItem text="Entrez le code de validation" />
      <TextInput
        style={styles.TextInput}
        placeholder="XXXX"
        keyboardType="numeric"
        maxLength={4}
        onSubmitEditing={() => replace("mainScreen")}
      />
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 40 }}>
        <BtnItem text="Terminer" navigation={() => replace("mainScreen")} />
      </View>
    </View>
  );
};

export default VerificationN3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    marginTop: 116,
  },
  TextInput: {
    marginTop: 44,
    height: "auto",
    width: 70,
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 17,
    letterSpacing: 8,
    fontFamily: "Nunito-Medium",
  },
});
