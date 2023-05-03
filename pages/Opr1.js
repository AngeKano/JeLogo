import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

const Opr1 = ({ route, navigation: { navigate } }) => {
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
      <Text style={styles.text2}>Choisissez votre opertion</Text>
      <View style={{ gap: 19 }}>
        <Pressable
          onPress={() =>
            navigate("Opr2", {
              label: label,
              img: img,
            })
          }
          style={styles.BtnPrinc}
        >
          <Text style={styles.BtnPrincTxt}>Depot</Text>
        </Pressable>
        
        <Pressable
          style={[
            styles.BtnPrinc,
            {
              backgroundColor: "none",
              borderColor: "#0372C1",
              borderWidth: 1,
            },
          ]}
        >
          <Text style={[styles.BtnPrincTxt, { color: "black" }]}>Retrait</Text>
        </Pressable>
      </View>

      {/* <Button title="Opr2" onPress={() => navigate("Opr2")} /> */}
    </View>
  );
};

export default Opr1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontFamily: "Nunito-Bold",
    fontSize: 30,
    marginVertical: 40,
  },
  text2: {
    fontFamily: "Nunito-Regular",
    fontSize: 21,
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
