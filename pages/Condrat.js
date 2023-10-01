import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import VerifItem from "../components/VerifItem";
import BtnItem from "../components/BtnItem";

const Condrat = ({ navigation: { navigate } }) => {
  ////
  const [fontsLoaded] = useFonts({
    "Nunito-Black": require("../assets/fonts/Nunito-Black.ttf"),
    "Nunito-Light": require("../assets/fonts/Nunito-Light.ttf"),
    "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    try {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    } catch {
      console.log("Erreur de police");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  ////////
  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <VerifItem text="Felicitation, Votre Inscription est terminer" />
      <Image
        source={require("../assets/congrat.png")}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height * 0.45,
          borderRadius: 100,
        }}
      />
      <View style={{ marginTop: Dimensions.get("window").height * 0.1 }}>
        <BtnItem
          text="Terminer"
          navigation={() => {
            navigate("mainScreen");
          }}
        />
      </View>
    </View>
  );
};

export default Condrat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    paddingTop: Dimensions.get("window").height * 0.1,
  },
});
