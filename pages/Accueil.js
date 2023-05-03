import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Button,
} from "react-native";
import React, { useCallback } from "react";
import MbSrvItem from "../components/MbSrvItem";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ScrollView } from "react-native-gesture-handler";
import News from "../components/News";

SplashScreen.preventAutoHideAsync();

const Accueil = ({ route, navigation: { navigate } }) => {
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Light": require("../assets/fonts/Nunito-Light.ttf"),
    "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
  });

  const { label,txt } = route.params;
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View onLayout={onLayoutRootView}>
        <Text style={styles.textCont}>{txt}</Text>
        <View style={styles.items}>
          <MbSrvItem navigate={navigate} label={label} />
        </View>
        <Text style={styles.textCont}>News</Text>
        <News />
      </View>
    </ScrollView>
  );
};

export default Accueil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textCont: {
    fontSize: 30,
    fontFamily: "Nunito-Bold",
    textAlign: "left",
    marginVertical: 48,
  },
  items: {
    flex: 1,
    alignItems: "center",
  },
});
