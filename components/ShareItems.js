import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const DATA = [
  {
    nom: "Twitter",
    img: require("../assets/icons/Twitter.png"),
  },
  {
    nom: "Facebook",
    img: require("../assets/icons/Facebook.png"),
  },
  {
    nom: "Whatsapp",
    img: require("../assets/icons/WhatsApp.png"),
  },
  {
    nom: "Telegram",
    img: require("../assets/icons/Telegram.png"),
  },
  {
    nom: "Instagram",
    img: require("../assets/icons/Instagram.png"),
  },
  {
    nom: "Copy",
    img: require("../assets/icons/copy.png"),
  },
  {
    nom: "docs",
    img: require("../assets/icons/docs.png"),
  },
];

const ShareItems = () => {
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
    <FlatList
      data={DATA}
      numColumns={4}
      keyExtractor={(item) => item.nom}
      renderItem={({ index, item }) => (
        <View style={styles.item}>
          <Image source={item.img} style={{ width: 50, height: 50 }} />
          <Text style={styles.txtItems}>{item.nom}</Text>
        </View>
      )}
      style={styles.flatlist}
    />
  );
};

export default ShareItems;

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    gap: 6,
    marginRight: 20,
    marginBottom: 20,
  },
  flatlist: {
    marginTop: 39,
    gap: 30,
  },
  txtItems: {
    fontFamily: "Nunito-Regular",
  },
});
