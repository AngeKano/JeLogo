import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const VerifItemCode = ({ text }) => {
  return (
    <>
      <View
        style={{ backgroundColor: "#0372C1", padding: 10, borderRadius: 5 }}
      >
        <Image
          source={require("../assets/playstore.png")}
          style={{ width: 172, height: 39 }}
        />
      </View>
      <Text style={styles.scndText}>{text}</Text>
    </>
  );
};

export default VerifItemCode;

const styles = StyleSheet.create({
  FirstText: {
    fontFamily: "Nunito-Regular",
    fontSize: 18,
  },
  span: {
    fontFamily: "Nunito-Black",
  },
  scndText: {
    marginTop: 43,
    fontFamily: "Nunito-Medium",
    fontSize: 21,
    textAlign: "center",
  },
});
