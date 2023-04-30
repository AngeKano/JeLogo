import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TextInput } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const VerificationN21 = ({ navigation: { navigate } }) => {
  const ref_input = useRef();
  const [pwd, setPwd] = useState("");
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
      <Text style={styles.scndText}>Entrez votre mot de passe</Text>
      <TextInput
        placeholder="PSW"
        onSubmitEditing={() =>
          pwd.length > 3 ? navigate("verificationN3") : null
        }
        ref={ref_input}
        keyboardType="numeric"
        maxLength={4}
        onChangeText={(pwd) => setPwd(pwd)}
        value={pwd}
        style={{ position: "absolute", opacity: 0 }}
      />

      <Pressable
        style={styles.ViewPuce}
        onPress={() => ref_input.current.focus()}
      >
        <View
          style={[
            styles.puce,
            {
              backgroundColor:
                pwd.length > 0 ? "#0372C1" : "rgba(3, 114, 193, 0.25)",
            },
          ]}
        ></View>
        <View
          style={[
            styles.puce,
            {
              backgroundColor:
                pwd.length > 1 ? "#0372C1" : "rgba(3, 114, 193, 0.25)",
            },
          ]}
        ></View>
        <View
          style={[
            styles.puce,
            {
              backgroundColor:
                pwd.length > 2 ? "#0372C1" : "rgba(3, 114, 193, 0.25)",
            },
          ]}
        ></View>
        <View
          style={[
            styles.puce,
            {
              backgroundColor:
                pwd.length > 3 ? "#0372C1" : "rgba(3, 114, 193, 0.25)",
            },
          ]}
        ></View>
      </Pressable>
      <Text style={styles.TxtMdp}>Mot de passe oubliez</Text>

      <Pressable
        onPress={() => navigate("verificationN22")}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: 40,
          alignItems: "center",
          gap: 8,
        }}
      >
        <Image
          source={require("../assets/icons/Digtal.png")}
          style={{ width: 44, height: 52 }}
        />
        <Text style={{ color: "#ABB0BC", fontFamily: "Nunito-Light" }}>
          Empreinte Digital
        </Text>
      </Pressable>
    </View>
  );
};

export default VerificationN21;

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
  ViewPuce: {
    flexDirection: "row",
    gap: 25,
    marginTop: 45,
  },
  puce: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  TxtMdp: {
    fontFamily: "Nunito-Medium",
    fontSize: 17,
    marginTop: 33,
    color: "#ABB0BC",
  },
});
