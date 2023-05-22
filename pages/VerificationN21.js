import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable
} from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import VerifItem from "../components/VerifItem";
import PuceItem from "../components/PuceItem";

SplashScreen.preventAutoHideAsync();

const VerificationN21 = ({ navigation: { navigate } }) => {
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
      <VerifItem text="Entrez votre code secret" />
      <PuceItem navigate={navigate} />
      <Text style={styles.TxtMdp}>Mot de passe oublié</Text>

      <Pressable
        onPress={() => navigate("verificationN22")}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: 20,
          alignItems: "center",
          gap: 8,
        }}
      >
        <Image
          source={require("../assets/icons/Digtal.png")}
          style={{ width: 44, height: 52 }}
        />
        <Text style={{ color: "#ABB0BC", fontFamily: "Nunito-Light" }}>
          Empreinte Digital
        </Text>
      </Pressable>
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
