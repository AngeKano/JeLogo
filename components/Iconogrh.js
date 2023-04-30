import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FlatList } from "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();
const DATA = [
  {
    label: "Depot",
    img: require("../assets/icons/iconographie/depot.png"),
    width: 58,
    height: 46,
  },
  {
    label: "Retait",
    img: require("../assets/icons/iconographie/cash.png"),
    width: 52,
    height: 45,
  },
  {
    label: "Recharger mon solde",
    img: require("../assets/icons/iconographie/money.png"),
    width: 50,
    height: 50,
  },
  {
    label: "Achat de pass",
    img: require("../assets/icons/iconographie/pass.png"),
    width: 45,
    height: 67,
  },
  {
    label: "Factures",
    img: require("../assets/icons/iconographie/facture.png"),
    width: 46,
    height: 42,
  },
  {
    label: "Historique",
    img: require("../assets/icons/iconographie/historique.png"),
    width: 48,
    height: 47,
  },
];
const Iconogrh = (props) => {
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
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
    <View onLayout={onLayoutRootView}>
      <FlatList
        data={DATA}
        numColumns={3}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 30,
            }}
          />
        )}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              item.label == "Achat de pass"
                ? props.navigate("Pass", {
                    label: item.label,
                  })
                : item.label == "Historique"
                ? props.navigate("historique")
                : props.navigate("Accueil", {
                    label: item.label,
                  });
            }}
            style={[{ marginRight: 7, flex: 1, alignItems: "center" }]}
          >
            <View style={styles.item}>
              <Image
                source={item.img}
                style={{ width: item.width, height: item.height }}
              />
            </View>
            <Text style={styles.txt}>{item.label}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Iconogrh;

const styles = StyleSheet.create({
  item: {
    borderRadius: 50,
    backgroundColor: "rgba(123, 207, 255, 0.2)",
    minWidth: 95,
    minHeight: 95,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    maxWidth: 100,
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Nunito-Medium",
  },
});
