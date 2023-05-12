import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
  Keyboard,
} from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

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
      <View
        style={{ backgroundColor: "#0372C1", padding: 10, borderRadius: 5 }}
      >
        <Image
          source={require("../assets/playstore.png")}
          style={{ width: 172, height: 39 }}
        />
      </View>

      <Text style={styles.FirstText}>
        Bienvenue sur l’application <Text style={styles.span}>JELOGO</Text>
      </Text>
      <Text style={styles.scndText}>Entrez votre numéro de compte</Text>
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
        <Pressable
          onPress={() => navigate("verificationN21")}
          style={styles.BtnPrinc}
        >
          <Text style={styles.BtnPrincTxt}>Continuer</Text>
        </Pressable>
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

  FirstText: {
    marginTop: 43,
    fontFamily: "Nunito-Regular",
    fontSize: 18,
  },
  span: {
    fontFamily: "Nunito-Black",
  },
  scndText: {
    fontFamily: "Nunito-Medium",
    fontSize: 21,
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
  BtnPrinc: {
    width: 200,
    height: 50,
    padding: 10,
    backgroundColor: "#0372C1",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "flex-end",
  },
  BtnPrincTxt: {
    fontFamily: "Nunito-Medium",
    fontSize: 21,
    color: "white",
  },
});
