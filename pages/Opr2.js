import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TextInput } from "react-native-gesture-handler";
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
        style={{ width: 154, height: 154, marginVertical: 40 }}
      />
      <View style={{ gap: 23, marginVertical: 40 }}>
        <TextInput
          style={styles.TextInput}
          placeholder="Numéro du depot"
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
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 40 }}>
        <Pressable
          onPress={() =>
            navigate("Opr3", {
              label: label,
              img: img,
            })
          }
          style={styles.BtnPrinc}
        >
          <Text style={styles.BtnPrincTxt}>Continuez</Text>
        </Pressable>
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
});
