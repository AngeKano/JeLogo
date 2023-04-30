import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TextInput } from "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();

const Opr3 = ({ route, navigation: { navigate } }) => {
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
      <Text style={styles.text}>{label}</Text>
      <Image source={img} style={{ width: 154, height: 154 }} />
      <Text style={styles.txtPwd}>Entrez votre mot de passe</Text>
      <View style={{ gap: 23, marginVertical: 40 }}>
        <TextInput
          style={styles.TextInput}
          placeholder="****"
          keyboardType="numeric"
          onSubmitEditing={() =>
            navigate("Opr4", {
              label: label,
              img: img,
            })
          }
          maxLength={4}
          secureTextEntry={true}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 40 }}>
        <Pressable
          onPress={() =>
            navigate("Opr4", {
              label: label,
              img: img,
            })
          }
          style={styles.BtnPrinc}
        >
          <Text style={styles.BtnPrincTxt}>Depot</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Opr3;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  TextInput: {
    height: "auto",
    minWidth: 70,
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 21,
    letterSpacing: 8,
  },
  text: {
    fontFamily: "Nunito-Bold",
    fontSize: 30,
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
  txtPwd: {
    fontFamily: "Nunito-Medium",
    marginTop: 20,
    fontSize: 21,
  },
});
