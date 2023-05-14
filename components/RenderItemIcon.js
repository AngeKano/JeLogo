import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { memo } from "react";

const RenderItemIcon = ({ item, navigate }) => {
  return (
    <Pressable
      onPress={() => {
        item.label == "Historique"
          ? navigate.navigate("historique")
          : item.label == "Retrait"
          ? navigate.navigate("Scan")
          : navigate.navigate("Accueil", {
              label: item.label,
              txt: item.txt,
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
  );
};

export default memo(RenderItemIcon);

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
