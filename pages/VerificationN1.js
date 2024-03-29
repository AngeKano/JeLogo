import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView, TextInput } from "react-native-gesture-handler";
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
    <ScrollView>
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
        <Pressable
          onPress={() => {
            navigate("login");
          }}
        >
          <Text style={styles.textLogin}>Se créer un compte</Text>
        </Pressable>

        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <BtnItem
            text="Continuer"
            navigation={() => navigate("verificationN21", (type = "normal"))}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default VerificationN1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    paddingTop: Dimensions.get("window").height * 0.1,
  },
  ViewInputText: {
    prefix: {
      flexDirection: "row",
      alignItems: "center",
      gap: 7,
      borderBottomWidth: 1,
      borderBottomColor: "#ABB0BC",
      paddingVertical: 3,
    },
    text: {
      fontFamily: "Nunito-Medium",
      fontSize: 17,
    },
    marginTop: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  TextInput: {
    width: "37%",
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 17,
    fontFamily: "Nunito-Medium",
  },
  textLogin: {
    fontFamily: "Nunito-Regular",
    fontSize: 18,
    marginVertical: 22,
    color: "#0E9CFF",
  },
});
