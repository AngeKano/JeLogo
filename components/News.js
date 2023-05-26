import { StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import React from "react";

const News = () => {
  return (
    <View style={styles.News}>
      <Text style={styles.smTxt}>Profitez des soldes </Text>
      <Text style={styles.lrgTxt}>Gagnez jusqu’a 100.000 XOF</Text>
      <Text style={styles.txt}>
        Recevez 500 XOF sur votre compte pour chaque utilisateur invité qui a un
        compte valide
      </Text>
      <Text style={styles.cdPrr}>Code parrainage</Text>
      <View style={styles.disCode}>
        <Text style={styles.txtCode}>{"iojlfh".toUpperCase()}</Text>
        <View style={styles.btnCode}>
        <Feather name="copy" size={20} color="black" />
        </View>
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  News: {
    backgroundColor: "white",
    paddingHorizontal: 26,
    paddingVertical: 30,
    borderRadius: 10,
    gap: 9,
  },
  smTxt: {
    fontFamily: "Nunito-Regular",
    fontSize: 20,
    color: "rgba(0, 0, 0, 0.61)",
  },
  lrgTxt: {
    fontFamily: "Nunito-Bold",
    fontSize: 22,
  },
  txt: {
    fontFamily: "Nunito-Light",
    fontSize: 20,
  },
  cdPrr: {
    fontFamily: "Nunito-SemiBold",
  },
  disCode: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtCode: {
    fontFamily: "Nunito-Bold",
    fontSize: 25,
  },
  btnCode: {
    backgroundColor: "#D9D9D9",
    padding: 13,
    alignItems: "center",
    borderRadius: 5,
  },
});
