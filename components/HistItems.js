import { StyleSheet, Text, Pressable, View } from "react-native";
import React, { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";

SplashScreen.preventAutoHideAsync();

const HistItems = (props) => {
  const [active, setActive] = useState(false);
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

  return (
    <Pressable onLayout={onLayoutRootView} onPress={() => setActive(!active)}>
      <View
        style={[
          styles.container,
          { backgroundColor: active || props.active ? "#0372C1" : "#BDBDBD" },
        ]}
      >
        <Text style={styles.txt}>{props.label}</Text>
      </View>
    </Pressable>
  );
};

export default HistItems;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    minWidth: 123,
    paddingVertical: 12,
    borderRadius: 10,
  },
  txt: {
    color: "white",
    fontFamily: "Nunito-Bold",
  },
});
