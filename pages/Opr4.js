import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TextInput } from "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();

const Opr4 = ({ route, navigation: { navigate } }) => {
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
      <Text style={styles.txtPwd}>
        <Text style={styles.txtBld}>Félicitations !</Text> votre transfèrt à
        bien été éffectué
      </Text>
      <View
        style={{
          flex: 1,
          gap: 28,
          justifyContent: "flex-end",
          marginBottom: 40,
        }}
      >
        <Pressable
          onPress={() =>
            navigate("Accueil", {
              label: label,
              img: img,
            })
          }
          style={styles.BtnPrinc}
        >
          <Text style={styles.BtnPrincTxt}>A un amis</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigate("Accueil", {
              label: label,
              img: img,
            })
          }
          style={[
            styles.BtnPrinc,
            { backgroundColor: "none", borderColor: "#0372C1", borderWidth: 1 },
          ]}
        >
          <Text style={[styles.BtnPrincTxt, { color: "black" }]}>
            Aller à l'accueil
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Opr4;

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
  txtBld: {
    fontFamily: "Nunito-Bold",
  },
  txtPwd: {
    fontFamily: "Nunito-Medium",
    marginTop: 20,
    fontSize: 21,
    textAlign: "center",
    maxWidth: 300,
  },
});
