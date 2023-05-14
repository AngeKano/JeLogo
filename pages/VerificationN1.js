import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import VerifItem from "../components/VerifItem";
import BtnItem from "../components/BtnItem";

SplashScreen.preventAutoHideAsync();

const VerificationN1 = ({ navigation: { navigate } }) => {
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
      <VerifItem text="Entrez votre numéro de compte" />
      <View style={styles.ViewInputText}>
        <View style={styles.ViewInputText.prefix}>
          <Image source={require("../assets/icons/Group.png")} />
          <Text style={styles.ViewInputText.text}>+225</Text>
          <AntDesign name="down" size={20} color="black" />
        </View>
        <TextInput
          style={styles.TextInput}
          placeholder="0X XX XX XX XX"
          keyboardType="numeric"
          maxLength={10}
          onSubmitEditing={() => navigate("verificationN21")}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 40 }}>
        <BtnItem
          text="Continuer"
          navigation={() => navigate("verificationN21")}
        />
      </View>
    </View>
  );
};

export default VerificationN1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    marginTop: 116,
  },
  ViewInputText: {
    prefix: {
      flexDirection: "row",
      alignItems: "center",
      gap: 7,
      borderBottomWidth: 1,
      borderBottomColor: "#ABB0BC",
      padding: 3,
    },
    text: {
      fontFamily: "Nunito-Medium",
      fontSize: 17,
    },
    marginTop: 44,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  TextInput: {
    width: "35%",
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 17,
    fontFamily: "Nunito-Medium",
  },
});
