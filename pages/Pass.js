import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Button,
} from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView } from "react-native-gesture-handler";
import PassItems from "../components/PassItems";

SplashScreen.preventAutoHideAsync();

const Pass = ({ route, navigation: { navigate } }) => {
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Light": require("../assets/fonts/Nunito-Light.ttf"),
    "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
  });

  const { label } = route.params;
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View onLayout={onLayoutRootView}>
          <Text style={styles.textCont}>Payement de facture et service</Text>
          <View style={styles.items}>
            <PassItems navigate={navigate}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCont: {
    fontSize: 20,
    fontFamily: "Nunito-Medium",
    textAlign: "left",
    marginVertical: 35,
    marginHorizontal: 20,
  },
  items: {
    flex: 1,
    alignItems: "center",
  },
});
