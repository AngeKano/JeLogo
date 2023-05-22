import { StyleSheet, Text, View, Image } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TextInput } from "react-native-gesture-handler";
import BtnItem from "../components/BtnItem";
SplashScreen.preventAutoHideAsync();

const Opr2 = ({ route, navigation: { navigate } }) => {
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
      <Image
        source={img}
        style={{ width: 154, height: 154, marginVertical: 30 }}
      />
      <Text style={styles.txtPwd}>Transférez votre argent</Text>

      <View style={{ gap: 23, marginVertical: 30 }}>
        <TextInput
          style={styles.TextInput}
          placeholder="Numéro du dépôt"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Montant du dépôt"
          keyboardType="numeric"
          onSubmitEditing={() =>
            navigate("Opr3", {
              label: label,
              img: img,
            })
          }
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 30 }}>
        <BtnItem
          text="Continuez"
          navigation={() =>
            navigate("Opr3", {
              label: label,
              img: img,
            })
          }
        />
      </View>
    </View>
  );
};

export default Opr2;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  TextInput: {
    height: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 21,
  },
  txtPwd: {
    fontFamily: "Nunito-Medium",
    marginTop: 15,
    fontSize: 21,
  },
});
