import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TextInput } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const VerificationN3 = ({ navigation: { replace } }) => {
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
      <Image
        source={require("../assets/playstore.png")}
        style={{ width: 172, height: 39 }}
      />
      <Text style={styles.FirstText}>
        Bienvenu sur l’application <Text style={styles.span}>JELOGO</Text>
      </Text>
      <Text style={styles.scndText}>Entrez le code de validation</Text>
      <View style={styles.ViewInputText}>
        <TextInput
          style={styles.TextInput}
          placeholder="XXXX"
          keyboardType="numeric"
          maxLength={4}
          onSubmitEditing={() => replace("mainScreen")}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 40 }}>
        <Pressable
          onPress={() => replace("mainScreen")}
          style={styles.BtnPrinc}
        >
          <Text style={styles.BtnPrincTxt}>Terminer</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default VerificationN3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    marginTop: 116,
  },

  FirstText: {
    marginTop: 63,
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
    marginTop: 44,
  },
  TextInput: {
    height: "auto",
    width: 70,
    borderBottomWidth: 1,
    borderBottomColor: "#ABB0BC",
    fontSize: 17,
    letterSpacing: 8,
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
