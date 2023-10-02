import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useCallback, useContext } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import VerifItem from "../components/VerifItem";
import BtnItem from "../components/BtnItem";
import { AuthContext } from "../context/AuthContext";

SplashScreen.preventAutoHideAsync();

const Login = ({ navigation: { navigate } }) => {
  const { setNumero, setCode } = useContext(AuthContext);

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
        <VerifItem text="Entrez votre numéro de téléphone" />
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
            onChange={(text) => {
              setNumero(text.nativeEvent.text);
            }}
          />
        </View>

        <Pressable
          onPress={() => {
            navigate("verificationN1");
          }}
        >
          <Text style={styles.textLogin}>Se connecter</Text>
        </Pressable>

        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 15 }}>
          <BtnItem
            text="Continuer"
            navigation={() =>
              navigate("verificationN3", { type: "Inscription" })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    marginTop: Dimensions.get("window").height * 0.1,
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
    width: "35%",
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 17,
    fontFamily: "Nunito-Medium",
  },
  textLogin: {
    fontFamily: "Nunito-Regular",
    fontSize: 18,
    marginTop: 30,
    marginBottom: 22,
    color: "#0E9CFF",
  },
  TextInputPwd: {
    height: "auto",
    width: 70,
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 17,
    letterSpacing: 8,
    fontFamily: "Nunito-Medium",
  },
});
